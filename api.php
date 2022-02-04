<?php

session_start();

include_once('connect.php');

$action = mysqli_real_escape_string($connect, $_POST['action']);

switch ($action) {
    case 'logar':
        $user = mysqli_real_escape_string($connect, $_POST['user']);
        $pass = mysqli_real_escape_string($connect, $_POST['pass']);
        $sql = "SELECT * 
            FROM prestadores 
            where (pr_usuario = '{$user}' OR pr_cpf = '{$user}') 
            AND pr_senha = '{$pass}'";
        $result = mysqli_query($connect, $sql);
        $rows = mysqli_num_rows($result);
        $data = mysqli_fetch_all ($result, MYSQLI_ASSOC);

        if ($rows > 0){
            $_SESSION['usuario']['user'] = $data[0]['pr_usuario'];
            $_SESSION['usuario']['cpf'] = $data[0]['pr_cpf'];
            $_SESSION['usuario']['tipo'] = $data[0]['tipo_usuario'];
            echo json_encode(['status' => true, 'msg' => 'Logado com Sucesso!', 'data' => $data]);
            mysqli_close($connect);
            exit;
        }else {
            echo json_encode(['status' => false, 'msg' => 'Usuário e/ou senha inválidos!']);
            mysqli_close($connect);
            exit;
        }
    break;
    
    case 'buscar_bairros':
        $term = mysqli_real_escape_string($connect, $_POST['cidade']);
        $sql = "SELECT id_bairro, ba_descricao FROM bairros WHERE ba_cidade = '{$term}' order by ba_descricao";
        $result = mysqli_query($connect, $sql);
       
        $data = mysqli_fetch_all ($result, MYSQLI_ASSOC);

        echo json_encode(['status' => true, 'data' => $data]);
        mysqli_close($connect);
        exit;
    break;
    
    case 'cad_prestador':
        $deleteFile = json_decode($_POST['deleteFile']);
        $nome = $_POST['nome'];
        $usuario = $_POST['usuario'];
        $cpf = preg_replace('/[^0-9]/', '',$_POST['prestador']);
        $email = $_POST['email'];
        $senha = "";
        $in_senha = "";
        if(isset($_POST['senha'])){
            $senha = $_POST['senha'];
            $in_senha = "pr_senha = '".$senha."',";
        }
        $tipo = $_POST['tipo'];
        $telefone = preg_replace('/[^0-9]/', '',$_POST['telefone']);
        $cidade = $_POST['cidade'];
        $bairro = $_POST['bairro'];
        $categoria = $_POST['categoria'];
        $descricao = $_POST['descricao'];
        if(isset($_SESSION['usuario'])){
            $sql = "UPDATE prestadores
                SET 
                    pr_usuario = '$usuario',
                    {$in_senha}
                    pr_bairro = $bairro, 
                    pr_cidade = $cidade, 
                    pr_telefone = '$telefone', 
                    pr_nome = '$nome', 
                    pr_categoria = $categoria, 
                    pr_descricao = '$descricao', 
                    pr_email = '$email'
                WHERE pr_cpf = $cpf";
        }else {
            $sql = "INSERT INTO prestadores (
                pr_usuario, 
                pr_senha,
                pr_bairro, 
                pr_cidade, 
                pr_telefone, 
                pr_nome, 
                pr_cpf, 
                pr_categoria, 
                pr_descricao, 
                pr_email,
                tipo_usuario)
                VALUES (
                '$usuario',
                '$senha',
                '$bairro', 
                '$cidade', 
                '$telefone', 
                '$nome', 
                '$cpf', 
                '$categoria', 
                '$descricao',
                '$email',
                '$tipo'
            )";
        }
        $result = mysqli_query($connect, $sql);
        
        if($result){
            $diretorio = "image/prestadores/".$cpf."/";
            if(!is_dir($diretorio)){
                mkdir($diretorio);
            }
            
            if(count($deleteFile) > 0){
                for($y = 0; $y < count($deleteFile); $y++){
                    $delete_file = unlink($diretorio . $deleteFile[$y]);
                    if($delete_file == 0){
                        echo(json_encode(['status' => false, 'msg' => 'Falha ao deletar Arquivo!']));
                        exit();
                    }
                }
            }

            if (!empty($_FILES)) {
                //Arquivo está sendo enviado para pasta image/prestadores 
                $filesDir = scandir('./image/prestadores/'.$cpf.'/');
                $countDir = count($filesDir) - 2;
                for($i = 0; $i < count($_FILES); $i++){
                    $move_upload_rs = move_uploaded_file($_FILES[$countDir]['tmp_name'], "image/prestadores/".$cpf."/".$_FILES[$countDir]['name']);
                    $countDir++;
                }
                if(!$move_upload_rs){
                    mysqli_close($connect);
                    exit(json_encode(['status' => false, 'msg' => 'Falha ao salvar arquivos!']));
                }
            }
            
            mysqli_commit($connect);
            exit(json_encode(['status' => true, 'msg' => 'Dados salvos com sucesso!']));
        }else{
            exit(json_encode(['status' => false, 'msg' => 'Falha ao salvar os Dados!']));
        }
    break;

    case 'buscar_prestador':
        $usu = $_POST['usuario'];
        $sql = "SELECT
            * FROM
                prestadores
            WHERE
                pr_cpf = $usu
            ";
        $result = mysqli_query($connect, $sql);
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

        if($data){
            $arquivos[] = scandir("./image/prestadores/".$usu."/");

            echo(json_encode(['status'=> true, 'data'=> $data, 'files'=> $arquivos]));
        }

    break;

    case 'buscar_prestadores_palavra':
        if(isset($_POST['term'])){
            $term = $_POST['term'];
            $query = "WHERE pr_descricao LIKE '%$term%' OR pr_nome LIKE '%$term%' OR cat.cat_descricao LIKE '%$term%'";
        }elseif(isset($_POST['cat'])){
            $cat = $_POST['cat'];
            $query = "WHERE cat.id_categoria = $cat";
        }else {
            $query = "";
        }
        
        $sql = "SELECT 
                    pr.pr_cpf cpf,
                    pr.pr_nome nome, 
                    pr.pr_descricao descricao, 
                    pr.pr_email email, 
                    pr.pr_telefone telefone, 
                    cat.cat_descricao categoria
                FROM 
                    prestadores pr 
                left join 
                    categorias cat 
                on 
                    pr.pr_categoria = cat.id_categoria 
                {$query}
                ";
                
        $result = mysqli_query($connect, $sql);

        $data = mysqli_fetch_all ($result, MYSQLI_ASSOC);
        if($data){
            for($i = 0; $i < count($data); $i++){
                
                $dir = $data[$i]['cpf'];
                if(is_dir("./image/prestadores/".$dir."/")){

                    $arquivos[$i] = scandir("./image/prestadores/".$dir."/"); 
                }
            }
            for ($i = 0; $i < count($arquivos); $i++){ 
                unset($arquivos[$i][0]);
                unset($arquivos[$i][1]);
            }
            
            echo json_encode(['status'=> true, 'data' => $data, 'imagens' => $arquivos]);
        }else{
            echo json_encode(['status'=>false, 'msg'=>'Não há prestadores para a opção escolhida!']);
        }
    break;
        
    case 'anunciantes':
        $sql = "SELECT an_cnpj FROM anunciantes where status = 'A'";
        $result = mysqli_query($connect, $sql);
        
        $data = mysqli_fetch_all ($result, MYSQLI_ASSOC);

        echo json_encode(['status'=> true, 'anunciantes'=>$data]);

    break;

    default:
        echo json_encode(['status'=> false, 'msg' => 'Ação não encontrada']);
    break;
}

?>