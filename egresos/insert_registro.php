<html>
<body>
<?php
session_start();

$contador=0;
//obtener variables
$descripcion=$_POST['descripcion'];
$tipo=$_POST['tipo'];

// process form
$conexion= mysql_connect('mysql.hostinger.es','u881843318_admin','Cangrejo76');
mysql_select_db("u881843318_presu",$conexion);
$peticion= mysql_query("INSERT INTO CONCEPTOS (DESCRIPCION, TIPO_CONCEPTO) VALUES ('$descripcion', '$tipo')");
echo "INSERT INTO CONCEPTOS (DESCRIPCION, TIPO_CONCEPTO) VALUES ('$descripcion', '$tipo')";
$result = mysql_query($peticion);
echo " Gracias Se a guardado la informacion.";
?>
<meta http-equiv="REFRESH";
content="0; url=default.php">

</body>
</html>






