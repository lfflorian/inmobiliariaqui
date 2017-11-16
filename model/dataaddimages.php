<?php 
include("connection.php");

$id = $_POST['id'];
$arrayImages = $_POST['arrayimg'];


try {
	foreach($arrayImages as $image)
	{
		$dataquery = "INSERT INTO imagen (idinmueble, rutaimagen, nombre) VALUES (".$id.",'".$image['file']."', '".$image['name']."')";
		$connection->query($dataquery);
	}
	echo "1";
} catch (Exception $e) {
	echo "0";
}