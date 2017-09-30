<?php
require 'libs/dibi/dibi/dibi.php';

//$options = array(
//    'driver' => 'mysql',
//    'host' => 'localhost',
//    'username' => 'root',
//    'password' => '',
//    'database' => 'support_db',
//);

 define('DB_HOST', getenv('127.0.0.1'));
 define('DB_PORT',getenv('3306'));
 define('DB_USER',getenv('MYSQL_USER'));
 define('DB_PASS',getenv('MYSQL_PASSWORD'));
 define('DB_NAME',getenv('MYSQL_DATABASE'));

 $options = array(
     'driver' => 'mysql',
     'host' => '127.0.0.1',
     'username' => DB_USER,
     'password' => DB_PASS,
     'database' => DB_NAME
 );

// v případě chyby vyhodí DibiException
try {
    dibi::connect($options);
} catch (DibiException $e) {
    die("error db connection");
};

?>
