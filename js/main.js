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

	//Contenido de sidebar
	if (window.location.href.indexOf('contenido')> -1) {

		var posts = [
			{
				id: 1,
				title: 'Aprendiendo a desarrollar una pagina',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Hola! Esta es mi primer publicacion desde mi sitio web alskdjalsk alskjd alksjdlaksjd laks dlkjas dlkja slkdj laksjd laksj dlkja sldkjsa l',
				image: 'images/gato1.jpg'
			},
			{
				id: 1,
				title: 'Aprendiendo a desarrollar una pagina',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Hola! Esta es mi primer publicacion desde mi sitio web',
				img: 'hey'
			},
			{
				id: 1,
				title: 'Aprendiendo a desarrollar una pagina',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Hola! Esta es mi primer publicacion desde mi sitio web',
				image: 'images/img1.jpg'
			}

		]

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<img src=${item.image}>
				</article>
			`;

			$("#contenido").append(post);
		});
	}
});