$(document).ready(function(){

	//Selector de ID
	$('#red').css('color', 'red').css('backgroundColor', '#262626');
	$('#yellow').css('color', 'yellow').css('backgroundColor', '#123456');
	$('#green').css('color', 'green').css('backgroundColor', '#ccc');

	//Selector de Clases
	var zebra = $('.zebra');
	console.log(zebra.eq(2));
	zebra.css('padding', '5px');

	$('.sinBorde').click(function(){
		var that = $(this);
		if (that.hasClass('zebra')){
			that.removeClass('zebra');
		}else{
			that.addClass('zebra');
		}
	});

	//Selectores de etiquetas
	var parrafos = $('p').css('cursor', 'pointer');
	parrafos.click(function(){
		var that = $(this);
		that.toggleClass('size');
	});

	//Selectores de atributo
	$('[title="google"]').css('color', 'green');
	$('[title="facebook"]').css('color', 'red');

	//Otros
	$('p, a').addClass('margenSuperior');
	//var busqueda = $('#caja').find('.resultado');
	var busqueda = $('#caja .resultado').parent().parent().parent().find('[title="google"]');
	var busqueda2 = $('#elemento2').parent().parent().find('.resultado');
	console.log(busqueda);
	console.log(busqueda2);
});