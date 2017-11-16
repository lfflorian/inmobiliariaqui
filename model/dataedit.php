<?php 
include("connection.php");

try {
	$id = $_POST['id'];
	$dataquery = "SELECT * FROM inmueble WHERE idinmueble = ". $id;
	$result = $connection->query($dataquery);
	$inmuebles = array();
	while ($row = $result->fetch_assoc())
	{
		// echo $row["operacion"] ." ". $row["tipoinmueble"] ." ". $row["zona"];
		$inmuebles = $row;
		// $i++;
	}
	
	echo json_encode($inmuebles);

} catch (Exception $e) {
	echo "0";
}