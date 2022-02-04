<?php
    session_start();
    include_once('connect.php');
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="image/link.png" />
    <link rel="stylesheet" href="style/list_prestadores.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js"></script>
    <script src="https://kit.fontawesome.com/7002eac132.js" crossorigin="anonymous"></script>
    
    <title>LinkServiço - Prestadores</title>
</head>
<body>
    <div class="geral">
    <div class="alert" id="alert" style="opacity: 0"></div>
        <div class="left">
            <div class="left_interna" id="left_interna">
            </div>
        </div>
        <div class="header role">
            <div class="logo">
                <a href="/index.php" class="link_logo">
                <span>Link</span>
                <img class = "logo_animate" src="image/link.png" alt="link serviço" >
                <span>Serviço</span> 
                </a>
            </div>
            <div class="login">
                <?php if(isset($_SESSION['usuario'])){ ?>
                    <span class = "inf_logado">Olá, <?php echo($_SESSION['usuario']['user']); ?>
                    <a href="logout.php">Sair</a></span>
                <?php } else {?>
                    <a href="login.php" class="btn_login"><span>Entrar</span></a>
                <?php } ?>
            </div>
        </div>
        
        <div class="center">
            <div class="list_prestadores" id="list_prestadores">
                
            </div>
        </div>
        <div class="right">
            <div class="right_interna" id = "right_interna"></div>
        </div>
    </div>
    <div class="anuncio_botton">
        <div class="anuncio_mobile" id = "anuncio_mobile" style="display: none"></div>
    </div>
</body>
<footer>
    Feito por PRANSTEC. <br>
    Copyright PRASTEC 2021.
</footer>
<script src="script/geral.js"></script>
<script src="script/list_prestadores.js"></script>
</html>