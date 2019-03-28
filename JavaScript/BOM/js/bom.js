'use strict'
//El BOM es el Browser Object Model

function getBom(){
	//console.log(window.innerHeight);
	//console.log(window.innerWidth);
	console.log(screen.height);
	console.log(screen.width);
	console.log(window.location);
}
getBom();
function redirect(url){
	window.location.href	 = url;
}
function abrirVentana(url){
	window.open(url);
}
function abrirVentanaPopUp(url){
	window.open(url, "", "width = 600px, height = 600px");
}