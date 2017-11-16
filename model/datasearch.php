<?php 
include("connection.php");

$operacion = $_POST['operacion'];
$tipoinmueble = $_POST['tipoinmueble'];
$departamento = $_POST['departamento'];
$zona = $_POST['zona'];
$dataquery = "SELECT inmueble.idinmueble, inmueble.operacion, imagen.rutaimagen, inmueble.parqueos, inmueble.nobanios, inmueble.nohabitaciones, inmueble.titulo, inmueble.precio, inmueble.moneda FROM inmueble LEFT JOIN imagen ON inmueble.idinmueble = imagen.idinmueble";
// WHERE operacion = '". $operacion."' AND tipoinmueble = '".$tipoinmueble."'"
// If Where no es vacio meter el and 
$where = "0";
// if ($operacion == null and $tipoinmueble == null and $departamento == null and $zona == null)
// {
// 	$dataquery = "SELECT * FROM inmueble";
// }

if ($operacion != "")
{
	$dataquery = $dataquery . " WHERE operacion = '". $operacion . "'";
	$where = "1";
}

if ($tipoinmueble != "")
{
	if ($where == "1")
	{
		$dataquery = $dataquery . " AND tipoinmueble = '". $tipoinmueble . "'";
	} else {
		$dataquery = $dataquery . " WHERE tipoinmueble = '". $tipoinmueble . "'";
		$where = "1";
	}
	
}

if ($departamento != "")
{
	if ($where == "1")
	{
		$dataquery = $dataquery . " AND departamento = '". $departamento . "'";
	} else {
		$dataquery = $dataquery . " WHERE departamento = '". $departamento . "'";
		$where = "1";
	}
}

if ($zona != "")
{
	if ($where == "1")
	{
		$dataquery = $dataquery . " AND zona = '". $zona . "'";
	} else {
		$dataquery = $dataquery . " WHERE zona = '". $zona . "'";
		$where = "1";
	}
}

$dataquery = $dataquery . " GROUP BY inmueble.idinmueble DESC";
try {
	// $dataquery = "SELECT * FROM inmueble WHERE operacion = '". $operacion."' AND tipoinmueble = '".$tipoinmueble."'";
	$result = $connection->query($dataquery);
	$inmuebles = array();
	$i = 0;
	if ($result->num_rows > 0)
	{
		while ($row = $result->fetch_assoc())
		{
			$inmuebles[$i] = $row;
			$i++;
		}
		echo json_encode($inmuebles);
	} else {
		echo 0;
	}
	 // echo $dataquery;
	

} catch (Exception $e) {
	echo 1;
}
 ?>