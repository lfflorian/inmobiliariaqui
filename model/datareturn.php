<?php 
include("connection.php");

$sql = "SELECT idinmueble,operacion, tipoinmueble, titulo, descripcion, departamento, municipio, zona, colonia, nohabitaciones, nobanios, parqueos, dimenciones, precio, moneda FROM inmueble";
$result = $connection->query($sql);
// Codigo utilizado para la carga de los inmuebles en un listado
$inmuebles = array();
$i = 0;
if ($result->num_rows > 0)
{
	while ($row = $result->fetch_assoc())
	{
		// echo $row["operacion"] ." ". $row["tipoinmueble"] ." ". $row["zona"];
		$inmuebles[$i] = $row;
		$i++;
	}
} else
{
	echo "ni un resultado";
}

echo json_encode($inmuebles);

?>