$(document).ready(function(){

	var box = $('#box');

	//Mouseover - Mouseout
	/*
	box.mouseover(function(){
		$(this).css('background', 'red');
	});
	box.mouseout(function(){
		$(this).css('background', 'green');
	});
	*/

	//Hover
	box.hover(
		function(){
			$(this).css('background', 'red');
		}, 
		function(){
			$(this).css('background', 'green');
		}
		);

	//CLick - Doble Click
	box.click(function(){
		$(this).toggleClass('size');
	});
	box.dblclick(function(){
		$(this).css('background', 'blue');
	});

	//Focus y Blur
	var nombre = $('#nombre');
	var datos = $('#datos');
	nombre.focus(function(){
		$(this).css('border', '2px solid green');
	});
	nombre.blur(function(){
		$(this).css('border', '1px solid #ccc');
		$(this).val();
		datos.text($(this).val()).show();
	});

	//MouseDown - MouseUp
	datos.mousedown(function(){
		$(this).css('border-color', 'gray')
	});
	datos.mouseup(function(){
		$(this).css('border-color', 'black')
	});

	//Mousemove
	$(document).mousemove(function(){
		$('body').css('cursor', 'none');
		var follow = $('#follow');
		follow.css('left', event.clientX).css('top', event.clientY);
	});
});