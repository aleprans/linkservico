<?php

session_start();
unset($_SESSION['usuario']);
// unset($_SESSION['cpf']);
header('Location: index.php');
exit;
?>