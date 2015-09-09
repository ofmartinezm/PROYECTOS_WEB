<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="es">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>XION TECH</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta charset="utf-8"/>



<link href="styles.css" rel="stylesheet" type="text/css" media="screen" />

<!-- Image Preloader -->
<script type="text/javascript" src="http://ajax.googlesapi.com/ajax/libs/jquery/jquery.min.js"></script>

<!-- linea para adicionar funcionalidad de recargue de sección-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.23.custom.min.js"></script>

<link type="text/css" href="css/smoothness/jquery-ui-1.8.23.custom.css" rel="stylesheet" />


 <!-- Bootstrap -->
 <link href="css/bootstrap.min.css" rel="stylesheet"/>

</head>

<script type="text/javascript">
	$(function(){
		$("#dialogModal").dialog({
				autoOpen: false,
				modal:true
		});

	$('#liLoggin').on('click',function(){
			$("#dialogModal").dialog('open');
			return false;
		});
	
	$('#datosEgresos').hide();
	
	$('#liEgresos').on('click',function(){
			$('#datosEgresos').show();
		});
	
	$('#liAjax').on('click',function(){
		//evento.preventDefault();
		alert("antes de ejecutar el load");
		$('#pruebaRecarga').load('default.html');
		alert("despues de ejecutar el load");
	});
	
	
	});




function cargar(div, desde)
{
     $(div).load(desde);
};


//$('#liPruebas').on('click',function(){
//    cargar('#pruebaRecarga', 'ventanaModal.php');
//});

</script>

<body>


<div id="content">
<div id="back">
<!-- header begins -->
<div id="header">


	<div id="logo">
	</div>
	  <div id="menu">

		<ul>
			<li><a href="#"  title="">Home</a></li>
			<li id="liLoggin"><a href="#" title="">Loggin</a></li>  
			<li id="liEgresos"><a href="#" title="">Egresos</a></li>
			<li id="liPruebas"><a href="#" title="">Reload</a></li>
			<li><a href="dialogoFormularioII.html" title="">Prueba venatana modal II</a></li>
			<li id="liAjax"><a href="#" title="">Prueba Ajax</a></li>
		</ul>
	</div>
</div>
<!-- header ends -->
<!-- content begins -->
 <div id="main">
	<div id="right">
<div >Prueba de recarga de datos en una seccion</div>
	<h3 id="pruebaRecarga" style="text-align:center;">RESPONSE</h3>	
	<div id="datosEgresos">
           <?php
             require_once("egresos.php");
           ?>
		</div>


  <br />     </p>
			<p class="date"><img src="images/comment.gif" alt="" /> <a href="#">Comments(2)</a> <img src="images/timeicon.gif" alt="" /> 21.02.</p>
	
			<h4><a href="#">Web Design Starter's Guide</a></h4>
		
			<p class="date"><img src="images/comment.gif" alt="" /> <a href="#">Comments(8)</a> <img src="images/timeicon.gif" alt="" /> 13.46.</p>
			
			<h4><a href="#">FLASH TEMPLATES</a></h4><br />
		   Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
			<p>Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat...</p>
			<p class="date"><img src="images/comment.gif" alt="" /> <a href="#">Comments(2)</a> <img src="images/timeicon.gif" alt="" /> 21.02.</p>	
	</div>
	<div id="left">
		<h3>Lorem ipsum dolor</h3>
			<p>Vivamus sagittis bibendum erat. Curabitur lorem ipsum dolore malesuada. <a href="#">More...</a></p>
			<br />
			<h3>Nunc pellentesque</h3>
			<ul>
				<li><ul>
					<li><a href="#">Vivamus id arcu</a></li>
					<li><a href="#">Duis congue ultricies</a></li>
					<li><a href="#">Purus in mollis purus</a></li>
					<li><a href="#">Orci nonummy fringilla</a></li>
					<li><a href="#">Pellentesque at lorem</a></li>
					<li></li>
					</ul>
			  </li>
			</ul>
			<br />
			<h3>Calendar</h3>
			<ul>
				<li id="calendar">			
				<div id="calendar1">
					<table id="calendar2" summary="Calendar">
						<caption>
						January 2011
						</caption>
						<thead>
							<tr>
								<th abbr="Monday" scope="col" title="Monday">M</th>
								<th abbr="Tuesday" scope="col" title="Tuesday">T</th>
								<th abbr="Wednesday" scope="col" title="Wednesday">W</th>
								<th abbr="Thursday" scope="col" title="Thursday">T</th>
								<th abbr="Friday" scope="col" title="Friday">F</th>
								<th abbr="Saturday" scope="col" title="Saturday">S</th>
								<th abbr="Sunday" scope="col" title="Sunday">S</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<td abbr="Des" colspan="3" id="prev"><a href="#">&laquo; Des</a></td>
								<td class="pad">&nbsp;</td>
								<td abbr="Feb" colspan="3" id="next" class="pad"><a href="#">Feb &raquo;</a></td>
							</tr>
						</tfoot>
						<tbody>
							<tr>
								<td colspan="2" class="pad">&nbsp;</td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
							</tr>
							<tr>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
							</tr>
							<tr>
								<td>20</td>
								<td id="now">21</td>
								<td>22</td>
								<td>23</td>
								<td>24</td>
								<td>25</td>
								<td>26</td>
							</tr>
							<tr>
								<td>27</td>
								<td>28</td>
								<td>29</td>
								<td>30</td>
								<td>31</td>
								<td class="pad" colspan="2">&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</div>
			</li>
		  </ul>
	</div>
	

<!--content ends -->

<!--footer begins -->
	</div>

<div id="footer">
<p>Copyright &copy; 2011.</p>
<p><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="http://validator.w3.org/check/referer" title="This page validates as XHTML 1.0 Transitional"><abbr title="eXtensible HyperText Markup Language">XHTML</abbr></a> | <a href="http://jigsaw.w3.org/css-validator/check/referer" title="This page validates as CSS"><abbr title="Cascading Style Sheets">CSS</abbr></a></p>
	</div>

<div align="center">
	<table align="center" cellspacing="0" cellpadding="5" border="0" style="margin: -80px 0px 0px 0px;">
		<tr valign="middle">
			<td><a href="http://www.hosting24.com/" target="_blank">&nbsp;<img alt="Web hosting" src="images/img_link_01.png" height="15" width="80" border="0" />&nbsp;</a></td>
			<td><a href="http://www.youhosting.com/" target="_blank">&nbsp;<img alt="Reseller hosting" src="images/img_link_02.png" height="15" width="80" border="0" />&nbsp;</a></td>
			<td><a href="http://www.vps.me/" target="_blank">&nbsp;<img alt="VPS hosting" src="images/img_link_03.png" height="15" width="80" border="0" /></a>&nbsp;</td>
			<td><a href="http://www.hostinger.com/" target="_blank">&nbsp;<img alt="Web Hosting" src="images/img_link_04.png" height="15" width="80" border="0" /></a>&nbsp;</td>
			<td><a href="http://www.boxbilling.com/" target="_blank">&nbsp;<img alt="Billing software" src="images/img_link_05.png" height="25" width="54" border="0" /></a>&nbsp;</td>
		</tr>
	</table>
</div> 		
	
</div>

 

<div id="dialogModal" title="Ingrese los datos del Usuario">
	
        <form action="login.php" method="post">
			<input type="text" name="usuario" value="" whidth=50% placeholder="usuario">
		
			<input type="password" name="contrasena" value="" whidth=50% placeholder="contraseña">
				
			<input type="submit">
					
		
	</form> 
</div>  
 
</div>


<!-- footer ends-->

</body>
</html>		

<!--CODIGO PARA RECARGAR UNA SECCION EN HTML CON JQUERY
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>New Web Project</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script>
function cargar(div, desde)
{
     $(div).load(desde);
}
</script>
    </head>
    <body>
        <div id="divtest">Este contenido va a cambiar :D</div>
<a href="#" onclick="cargar('#divtest', '2.html')">Cargar contenido</a>
    </body>
</html>
-->		