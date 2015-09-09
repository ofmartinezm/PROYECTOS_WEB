<!DOCTIPE html>
<html lang="es">

<head>
<title>Ventana modal con jquery</title>
<meta charset="utf-8"/>
<link type="text/css" href="css/smoothness/jquery-ui-1.8.23.custom.css" rel="stylesheet" />
<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.23.custom.min.js"></script>
</head>
<script type="text/javascript">
	$(function(){
		$('#botonera button').button();
		$('#botonera, footer').css({
			'text-align':'center','padding':10
		});
	$('#dialogAuto').dialog();
	
	$('#dialogAnimada').dialog({
		autoOpen:false,
		show:'explode',
		hide:'blind'
	});

	$('#btnAnimado').on('click',function(){
		$('#dialogAnimada').dialog('open');
		return false;
	});

	$('#dialogPersonalizada').dialog({
		autoOpen:false
	});

$('#btnPersonalizado').on('click',function(){
	$('#dialogPersonalizada').dialog({
				title: 'Ventana de Diálogo Personalizada con parámetros',
				autoOpen: true,
				width:500,
				height:250,
				draggable: false,
				resizable: false,
				position: [200,300]
			});

	});

$("#dialogModal" ).dialog({
				autoOpen: false,
				modal:true
		});

$('#btnModal').on('click',function(){
			$("#dialogModal" ).dialog('open');
			return false;
		});

$("#dialogNoModal" ).dialog({
				autoOpen: false,
				modal:false
		});

$('#btnNoModal').on('click',function(){
			$("#dialogNoModal" ).dialog('open');
			return false;
		});
		

	});

</script>

<body>
	<div id="wraper">
		
		<div id="dialogAuto" title="Ventana modal auto cargable">
			<p>
				No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor
			</p>
		</div><div id="dialogAnimada" title="Ventana modal auto cargable">
			<p>
				No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor
			</p>
		</div>
		<div id="dialogPersonalizada" title="Ventana modal auto cargable">
			<p>
				No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor
			</p>
		</div>
		<div id="dialogNoModal" title="Ventana modal auto cargable">
			<p>
				No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor
			</p>
		</div>
		<div id="dialogModal" title="Ventana modal auto cargable">
			<p>
				No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor
			</p>
		</div>

		<header>


		</header>
		<SECTION id="botonera">
			<button id="btnAnimado">Ventana Animada</button>
			<button id="btnPersonalizado">Ventana Personalizado</button>
			<button id="btnModal">Ventana Modal</button>
			<button id="btnNoModal">Ventana No Modal</button>

		</SECTION>

	</div>	
	<footer>
		powrede by oscar fernando martinez
	</footer>
</body>
</html>