<?php 
include("connection.php");

	$operacion = $_POST['operacion'];
	$tipoinmueble = $_POST['tipoinmueble'];
	$titulo = $_POST['titulo'];
	$descripcion = $_POST['descripcion'];
	$departamento = $_POST['departamento'];
	$municipio = $_POST['municipio'];
	$zona = $_POST['zona'];
	$colonia = $_POST['colonia'];
	$nohabitaciones = $_POST['nohabitaciones'];
	$nobanios = $_POST['nobanios'];
	$parqueos = $_POST['parqueos'];
	$dimenciones = $_POST['dimenciones']; 
	$precio = $_POST['precio'];
	$moneda = $_POST['moneda']; 
	/*AGREGAR PRECIO*/
	/*AGREGAR MONEDA*/
	
	try {

	$dataquery = "INSERT INTO inmueble (operacion, tipoinmueble, titulo, descripcion, departamento, municipio, zona, colonia, nohabitaciones, nobanios, parqueos, dimenciones, precio, moneda) VALUES ('".$operacion."','".$tipoinmueble."','".$titulo."','".$descripcion."', '".$departamento."', '".$municipio."', '".$zona."','".$colonia."',".$nohabitaciones.",".$nobanios.",".$parqueos.",".$dimenciones.",".$precio.",'".$moneda."'')";
	$connection->query($dataquery);
		echo "1";
	 } catch (Exception $e) {
		echo "0";
	}