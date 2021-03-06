<?php

    session_start();
    

    include_once('connect.php');

    $sql = "SELECT * FROM categorias";
    $result = mysqli_query($connect, $sql);
    $rows = mysqli_num_rows($result);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="image/link.png" />
    <link rel="stylesheet" href="style/linkservico.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/7002eac132.js" crossorigin="anonymous"></script>
    
    <title>LinkServiço</title>
</head>
<body>
    <div class="geral">
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
                    <a href="login.php" class="btn_login"><span>Entrar</span></a>
                </div>
                <!-- <?php if(isset($_SESSION['usuario'])){ ?>
                    <div class="login">
                        <span class = "inf_logado"><a href="cadastroPrest.php">Cadastro</a>
                        <a href="logout.php">Sair</a></span>
                    </div>
                    <?php } else {?>
                        <div class="login">
                            <a href="login.php" class="btn_login"><span>Entrar</span></a>
                        </div>
                    <?php } ?> -->
                    </div>
                    
                    <div class="center">
                        <div class="opacity">
                            <div class="name_servico">Link Serviço</div>
                            <div class="info_servico">
                                O Link Serviço é uma plataforma <strong>gratuita</strong> de intermediação de mão de obra.
                                Onde o prestdor do serviço se cadastra <strong>gratuitamente</strong> e seus dados ficam disponiveis 
                                para quem estiver precisando de sua mão de obra o encontre de forma facil e rápida. Não perca tempo e serviço, 
                                <?php if(isset($_SESSION['usuario'])){ ?>
                                    cadastre-se
                                    <?php }else { ?>
                                    <a href="#" onclick="cadastrar()">cadastre-se</a>
                                    <?php }?>
                                    e já tenha seus dados disponiveis para milhões de pessoas.
                            </div>
            
                            <section class="lista">
                                <div class="move_left" onclick="moveArea_left(<?php echo($rows); ?>)">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                                <div class="move_right" onclick="moveArea_right(<?php echo($rows); ?>)">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                                <div class="titulo_servico">
                                    <div id="search_cab">
                                        <h2>Categorias</h2>
                                        <div class="search">
                                        <input type="text" placeholder="Busca por Palavra-chave" id="buscar"><i class="fa fa-search" aria-hidden="true" title="Buscar" onclick="buscar_palavra()"></i></input>
                                        </div>
                                    </div>
                                    <div class="list_area" id="list_area" >
                                        <div class="move_row" style="width: <?php echo($rows * 150);?>px;">
                                            <?php
                                                foreach ($result as $value){?>
                                                    <div class="row_items" onclick="buscar_categoria(<?php echo($value['id_categoria']);?>)">
                                                        <span><?php echo $value['cat_descricao']; ?>
                                                            <img src="image/categorias/<?php echo($value['cat_image']);?>.png"
                                                                alt="<?php echo($value['cat_descricao']); ?>" 
                                                                style="width: 140px;"
                                                            >
                                                        </span>
                                                    </div>
                                            <?php } ?>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right_interna" id = "right_interna"></div>
                    </div>
                </div>
                 <div class="anuncio_botton">
        <div class="anuncio_mobile" id = "anuncio_mobile"></div>
    </div>
</body>
<footer>
    Feito por PRANSTEC. <br>
    Copyright PRASTEC 2021.
</footer>
<script src="script/linkservico.js"></script>
<script src="script/geral.js"></script>
</html>