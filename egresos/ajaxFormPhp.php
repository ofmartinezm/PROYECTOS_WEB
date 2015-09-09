<?php
/**
 * @author CazaresLuis
 * www.cazaresluis.com
 * @filesource ajaxFormPhp.php
 * @category ajax
 * 
 * Validando y ejecutando Formulario con AJAX
 */

// $salida = '';
$seconds = 2;

echo ('inicia ejecución del archivo .php');

// Verificar si existe la variable GET
if(isset($_POST['accion']))
{
	// Esperamos unos segundos
	// Esto es para probarlo de forma local
	// Debe eliminarse cuando subimos el script a internet
	
	
	// Obtener la efcha y hora del servidor
	/*if($_POST['accion'] == 'ProcesaFormulario')
	{
		sleep($seconds);
	}*/
	
	// Salida de datos
	echo ($_POST);
	
}else
{
	echo ('no existe la variable post');
}



?>