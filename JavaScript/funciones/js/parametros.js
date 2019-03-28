'use strict'

var texto = "Hola mundo soy una variable global";
var numero = 12;

function holaMundo(texto){
	//Una variable dentro de una funcion solo existe en la funcion y no puede utilizarse desde fuera
	var holaMundo = "texto dentro de funcion";
	console.log(texto);
	console.log(typeof numero.toString());
	console.log(holaMundo);
}

holaMundo(texto);