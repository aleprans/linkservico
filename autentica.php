<?php

$title = "LinkServiço";
$icon = "image/link.png";

if (!$_SESSION['usuario']) {
    header('Location: login.php');
    exit;
}

?>