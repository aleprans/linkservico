<?php
    $servername = "localhost:3306";
    $username = "root";
    $password = "navigu";
    $db_name = "servicolitoral";

    $connect = mysqli_connect($servername, $username, $password, $db_name);

    if (mysqli_connect_error()):
        echo "Falha na conexão: ".mysqli_connect_error();
    endif;

?>