<?php
//realizamos la conexion
$conexion= mysql_connect('mysql.hostinger.es','u881843318_admin','Cangrejo76');

//estructura de control por si falla
if (!$conexion) 
{
	die("No se pudo realizar la conexion:".mysql_error());
}
//selecciono la base de datos
mysql_select_db("u881843318_presu",$conexion);

//realizo la peticion
$peticion= mysql_query("select ID_CONCEPTO, DESCRIPCION, TIPO_CONCEPTO from CONCEPTOS");

echo '<table class="table table-bordered table table-hover table table-condensed table table-striped" >';
echo ' <tr><th>CODIGO CONCEPTO</th><th>DESCRIPCION</th><th>TIPO</th></tr>';
//listo los elementos de la BD
while ($fila= mysql_fetch_array($peticion))
 {
   echo "<tr  class='small'> <td>".$fila['ID_CONCEPTO']."<td>".$fila['DESCRIPCION']."<td>".$fila['TIPO_CONCEPTO']."</tr>";
       
}
echo "</table>";

?>