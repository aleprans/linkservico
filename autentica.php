<?php

$title = "LinkServiço";
$icon = "image/link.png";

// itens menu
$pginicial = "inicial.php";
$clientes = "listaclientes.php";
$produtos = "listaprodutos.php";
$usuarios = "usuarios.php";
$caixa = "caixa.php";
$financeiro = "financeiro.php";

if (!$_SESSION['usuario']) {
    header('Location: login.php');
    exit;
}

?>