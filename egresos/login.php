<?php
session_start();

//obtener variables
$usuario=$_POST['usuario'];
$contrasena=$_POST['contrasena'];

// crear conexion
$conexion=mysql_connect('mysql.hostinger.es','u881843318_admin','Cangrejo76');
//estructura de control por si falla
if (!$conexion) 
{
	die("No se pudo realizar la conexion:".mysql_error());
}
//selecciono la base de datos
mysql_select_db("u881843318_presu",$conexion);

//realizo la peticion
$peticion= mysql_query("select * from USUARIOS ");

// repasar los resultados 
while ($fila= mysql_fetch_array($peticion)){
	$usuariobasedatos= $fila['USUARIO'];
	$constrasenabasedatos=$fila['PASSWORD'];
	$documentobasedatos=$fila['DOCUMENTO'];
	$idusuariobasedatos=$fila['ID'];
	
	if ($usuariobasedatos==$usuario  && $constrasenabasedatos==$contrasena) {
		//asingar variables de session
		$_SESSION['usuario']=$usuario;
		$_SESSION['contrasena']=$contrasena;
		echo '
		<html>
			<head>
				<meta http-equiv="REFRESH";
				content="0; url=default.php">
			</head>

		</html>';


	}else{
	// SI EL RESULTADO ES NEGATIVO
		echo 'Error usuario o contraseña invalidos';
		echo '<br/>';
		echo 'No eres usuario todavia ingresa <a href="formularioaltausuario.php">AQUI </a>';

	}
}

//cerrar base de datos
mysql_close($conexion);
?>