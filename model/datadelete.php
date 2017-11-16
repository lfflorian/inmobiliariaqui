<?php 
include("connection.php");

try {
	$id = $_POST['id'];
	$dataquery = "DELETE FROM inmueble WHERE idinmueble = ". $id;
	$connection->query($dataquery);
	echo "1";
} catch (Exception $e) {
	echo "0";
}
 ?>