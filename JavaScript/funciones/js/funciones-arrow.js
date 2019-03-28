'use strict'
//Funciones arow

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar; 
}
sumame(5, 7,
	dato => {
		console.log("La suma es: " + dato)
	},
	dato => 	{
		console.log("La suma x 2 es: " + (dato * 2))
	});