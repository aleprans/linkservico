<?php
    $servername = "127.0.0.1:3306";
    $username = "linkServico";
    $password = "0Ph2d7gCa94He85O";
    $db_name = "linkservico";

    $connect = mysqli_connect($servername, $username, $password, $db_name);
    $connect->autocommit(false);

    if (mysqli_connect_error()):
        echo "Falha na conexão: ".mysqli_connect_error();
    endif;

?>