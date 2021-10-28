<?php

session_start();
include_once('connect.php');
// include_once('autentica.php');

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="style/login.css">

    <title>LinkServiço - login</title>
</head>
<body>
    <div class="geral">
        <div class="alert" id="alert" style="opacity: 0"></div>
        <h1>Login</h1>
        <div class="inputs">
            <input type="text" name="user" id="user" class="user" placeholder="  Usuário ou CPF">
            <input type="password" name="pass" id="pass" class="pass" placeholder="  Senha">
            <span>Esqueceu sua senha?<a href="../cadastro.php"><strong> clique aqui.</strong></a></span>
        </div>
        <div class="buttons">
            <input type="button" value="Voltar" class="voltar"id="voltar" onclick="voltar()">
            <input type="button" value="Logar" class="login" id="logar" onclick="logar()">
        </div>
    </div>
    <script src="script/geral.js"></script>
    <script src="script/login.js"></script>
</body>

</html>
