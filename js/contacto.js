var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;


$(document).ready(function(){
	$(".errores").hide();
	$("#boton-submit").click(function(){
		var nombre = $("#name").val();
		var email = $("#email").val();
		var mensaje = $("#mensaje").val();

		if(nombre == ""){
			$("#mensaje-nombre").fadeIn();
			return false;	
		}else{
			$("#mensaje-nombre").fadeOut();

			if(email == "" || !expr.test(email)){
				$("#mensaje-email").fadeIn();
				return false;
			}else{
				$("#mensaje-email").fadeOut();
				if(mensaje == ""){
					$("#mensaje-mensaje").fadeIn();
					return false;
				}
			}
		}

	});
});