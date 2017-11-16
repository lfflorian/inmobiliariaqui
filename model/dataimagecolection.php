<?php 
include("connection.php");

try {
	$id = $_POST['id'];
	$dataquery = "SELECT * FROM imagen WHERE idinmueble = ". $id;
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
	} else
	{
		echo "ni un resultado";
	}

} catch (Exception $e) {
	echo "0";
};




