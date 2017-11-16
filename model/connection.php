<?php 
$dbhost="localhost";
$dbusuario="root"; 
$dbpassword=""; 
$db="inmobiliariaqui";           
$connection = new mysqli($dbhost, $dbusuario, $dbpassword, $db); 

if ($connection->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?> 
