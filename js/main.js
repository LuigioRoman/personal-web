$(document).ready(function(){

	//Efecto del Titulo
	$(".titulos").mouseover(function(){
		$(this).css({
			"font-size": "35px",
		});
	});

	$(".titulos").mouseout(function(){
		$(this).css({
			"font-size": "2em"
		});
	});

	//Efectos del encabezado
	$(".encabezado").mouseover(function(){
		$(this).css({
			"background": "rgba(5, 5, 5, 0.9)"
		});
	});

	$(".encabezado").mouseout(function(){
		$(this).css({
			"background": "rgba(5, 5, 5, 0.3)"
		});
	});

	//Efecto de la barra de navegacion
	$(".elemento-nav").mouseover(function(){
		$(this).css({
			"background": "rgba(5, 5, 5, 0.9)"
		});
		$(this).css("cursor", "pointer");
	});

	$(".elemento-nav").mouseout(function(){
		$(this).css({
			"background": "rgba(0, 0, 0, 0)"
		});
	});
});