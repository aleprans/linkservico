<?php
session_start();

include_once('connect.php');

$sql_cid = "SELECT * FROM cidades order by cid_descricao";
$result_cid = mysqli_query($connect, $sql_cid);

$sql_cat = "SELECT id_categoria, cat_descricao FROM categorias order by cat_descricao";
$result_cat = mysqli_query($connect, $sql_cat);
$rows_cat = mysqli_num_rows($result_cat);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="image/link.png" />
    <script src="https://use.fontawesome.com/e659c00a73.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js"></script>
    
    <link rel="stylesheet" href="style/Perfil.css">

    <title>LinkServiço - Perfil</title>
</head>
<body>
    <div class="container">
        <div class="geral">
            <div class="alert" id="alert" style="opacity: 0"></div>
            <h1>Perfil - Prestador</h1>
            <form action="">
                <input type="hidden" id="usu" value="<?php echo($_SESSION['usuario']['cpf']);?>">
                
                <div class="dados_pessoais">
                    <div class="item name">
                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder=" Nome Completo" maxlength="50">
                    </div>
                    <div class="item">
                        <label for="user">Usuario</label>
                        <input type="email" name="user" id="user" placeholder=" Até 8 caracteres">
                    </div>
                    <div class="item email">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" maxlength="50">
                    </div>
                    <div class="item">
                        <label for="cpf">CPF/CNPJ</label>
                        <input type="text" name="cpf" id="cpf" placeholder=" Só numeros" maxlength="18">
                    </div>
                    <div class="item">
                        <label for="telefone">Telefone</label>
                        <input type="text" name="telefone" id="telefone" placeholder=" Só numeros" maxlength="16">
                    </div>
                    <div class="item">
                        <label class="pass" for="password">Senha</label>
                        <input type="password" class="pass" name="password" id="password" maxlength="16" placeholder=" De 8 a 16 caracteres alfanumericos">
                    </div>
                    <div class="item">
                        <label class="c_pass" for="confirm_password">Confirmar Senha</label>
                        <input type="password" class="c_pass" name="confirm_password" id="confirm_password" maxlength="16">
                    </div>
                    <div class="item">
                        <label for="cidades">Cidade</label>
                        <select name="cidades" id="cidades">
                            <option value="0">Selecione uma cidade</option>
                            <?php
                                while ($dados = $result_cid->fetch_array()) { ?>
                                    <option value="<?php echo $dados['id_cidade']; ?>">
                                    <?php echo $dados['cid_descricao']; ?></option>
                                <?php } 
                            ?>
                        </select>
                    </div>
                    <div class="item">
                        <label for="bairros">Bairro</label>
                        <select name="bairros" id="bairros">
                            <option value="0">Selecione um bairro...</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="categorias">Categoria</label>
                        <select name="categorias" id="categorias">
                            <option value="0">Selecione uma categoria</option>
                            <?php
                                while ($dados = $result_cat->fetch_array()) { ?>
                                    <option value="<?php echo $dados['id_categoria']; ?>">
                                    <?php echo $dados['cat_descricao']; ?></option>
                                <?php }
                            ?>
                            <option value = "<?php echo($rows_cat + 1); ?>">Outros</option>
                        </select>
                    </div>
                    <div class="textarea item">    
                        <label for="descricao_servico">Descrição do Serviço Prestado</label>
                        <textarea name="descricao_servico" id="descricao_servico" maxlength="400" placeholder="Minino de 20 e no maximo 400 caracteres"></textarea>
                    </div>
                </div>
                <div class="upload">
                    <div class="upload_click">
                        <input type="file" style="display: none" name="up_fotos[]" id="up_fotos" onchange="updateList()">
                        <label class="btn_select" for="up_fotos"><span>Selecione Foto(s) de Serviços Executados</span></label>
                        <span class="warning">Maxímo 3 fotos</span>
                    </div>
                    <div id="exibe">
                        <ul style="list-style: none;">
                            <li>Só é permitido Arquivos com no maximo 5MB</li>
                            <li>e de extensão (jpg, jpeg, png)</li>
                        </ul>
                    </div>
                </div>
            </form>
            <div class="buttons">
                <input type="button" value="Voltar" class="voltar"id="voltar" onclick="voltar()">
                <input type="button" value="Salvar" class="salvar" id="Salvar" onclick="Salvar()">
            </div>
                
        </div>
    </div>
    <script src="script/geral.js"></script>
    <script src="script/Perfil.js"></script>
</body>

</html>