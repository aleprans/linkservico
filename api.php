<?php

session_start();

include_once('connect.php');


$action = mysqli_real_escape_string($connect, $_POST['action']);

switch ($action) {
    case 'logar':
        $user = mysqli_real_escape_string($connect, $_POST['user']);
        $pass = mysqli_real_escape_string($connect, $_POST['pass']);
        $sql = "SELECT * FROM usuarios where (usuario = '{$user}' OR us_cpf = '{$user}') AND us_senha = md5('$pass')";
        $result = mysqli_query($connect, $sql);
        $rows = mysqli_fetch_assoc($result);

        if ($rows){
            $_SESSION['usuario']['usu'] = $user;
            $_SESSION['usuario']['tipo'] = $rows['us_tipo'];
            echo json_encode(['status' => true, 'msg' => 'Logado com Sucesso!']);
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
            echo json_encode(['status' => true, 'msg' => 'Dados salvos com sucesso!']);
            exit;
        break;

    default:
        echo json_encode(['status'=> false, 'msg' => 'Ação não encontrada']);
    break;
}

?>