<?php

require dirname(__FILE__) . '/../libs/dibi/dibi/dibi.php';

//$options = array(
//    'driver' => 'mysql',
//    'host' => 'localhost',
//    'username' => 'root',
//    'password' => '',
//    'database' => 'support_db',
//);

$options = array(
    'driver' => 'mysql',
    'host' => '127.11.88.130:3306 ',
    'username' => 'adminv2jhrsc',
    'password' => '76f-iK4Jy6uF',
    'database' => 'support',
);

// v případě chyby vyhodí DibiException
try {
    dibi::connect($options);
} catch (DibiException $e) {
    echo"error db";
};

?>
