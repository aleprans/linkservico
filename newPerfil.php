<?php

include_once('connect.php');

$sql = "SELECT * FROM cidades order by cid_descricao";
$result = mysqli_query($connect, $sql);

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
    
    <link rel="stylesheet" href="style/newPerfil.css">

    <title>LinkServiço - Perfil</title>
</head>
<body>
    <div class="geral">
        <div class="alert" id="alert" style="opacity: 0"></div>
            <h1>Perfil - Prestador</h1>
            <div class="dados_pessoais">
                <label for="name">Nome</label>
                <input type="text" name="name" id="name" placeholder=" Nome Completo" maxlength="50">
                <label for="user">usuario</label>
                <input type="email" name="user" id="user" placeholder=" Até 8 caracteres">
                <label for="email">e-mail</label>
                <input type="text" name="email" id="email" maxlength="50">
                <label for="cpf">CPF/CNPJ</label>
                <input type="text" name="cpf" id="cpf" placeholder=" Só numeros" maxlength="18">
                <label for="telefone">Telefone</label>
                <input type="text" name="telefone" id="telefone" placeholder=" Só numeros" maxlength="16">
                <label class="pass" for="password">Senha</label>
                <input type="password" class="pass" name="password" id="password" maxlength="16" placeholder=" De 8 a 16 caracteres alfanumericos">
                <label class="c_pass" for="confirm_password">Confirmar Senha</label>
                <input type="password" class="c_pass" name="confirm_password" id="confirm_password" maxlength="16">
            </div>
            <div class="textarea">    
                <label for="descricao_servico">Descrição do Serviço Prestado</label>
                <textarea name="descricao_servico" id="descricao_servico" maxlength="200">Minino de 20 caracteres
                </textarea>
            </div>
            <div class="selects">
                <label for="cidade">Cidade</label>
                <select name="cidades" id="cidades">
                    <option value="0">Selecione uma cidade</option>
                    <?php
                        while ($dados = $result->fetch_array()) { ?>
                            <option value="<?php echo $dados['id_cidade']; ?>">
                            <?php echo $dados['cid_descricao']; ?></option>
                        <?php } 
                    ?>
                </select>
                <label for="bairros">Bairro</label>
                <select name="bairros" id="bairros">
                    <option value="0">Selecione um bairro...</option>
                </select>
            </div>
            <div class="upload">
                <input type="file" style="display: none" name="up_fotos[]" id="up_fotos" onchange="updateList()">
                <label class="btn_select" for="up_fotos"><span>Selecionar Foto(s)</span>
                <span class="warning">Maxímo 3 fotos</span></label>
            </div>
            <div id="exibe">
                <span>Arquivos selecionados</span>
            </div>
            <div class="buttons">
                <input type="button" value="Voltar" class="voltar"id="voltar" onclick="voltar()">
                <input type="button" value="Salvar" class="salvar" id="Salvar" onclick="Salvar()">
            </div>
            
    </div>
    <script src="script/geral.js"></script>
    <script src="script/newPerfil.js"></script>
</body>

</html>