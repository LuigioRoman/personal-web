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
				id: 2,
				title: 'Aprendiendo a desarrollar una pagina',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Hola! Esta es mi primer publicacion desde mi sitio web',
				image: 'images/gato1.jpg'
			},
			{
				id: 3,
				title: 'Aprendiendo a desarrollar una pagina',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Hola! Esta es mi primer publicacion desde mi sitio web',
				image: 'images/img1.jpg'
			},
			{
				id: 4,
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

		$(".post").mouseover(function(){
			$(this).css({
				"background": "rgba(5, 5, 5, 0.9)"
			});
			$(this).css("cursor", "pointer");
		});

		$(".post").mouseout(function(){
			$(this).css({
				"background": "rgba(0, 0, 0, 0)"
			});
		});
		
		$(".post").click(function(){
			var title = this.getElementsByTagName("h2");
			var date = this.getElementsByTagName("span");
			var content = this.getElementsByTagName("p");
			var image = this.getElementsByTagName("img");

			var postSelected = `
			<article class="postSelected">
				<h2>${title.innerHTML}</h2>
				<span class="date">${date.innerHTML}</span>
				<p>
					${content.innerHTML}
				</p>
				<img src=${image.innerHTML}>
			</article>
		`;
		$("#articulo-elegido").append(postSelected);
		console.log(postSelected);
		});
	}
});