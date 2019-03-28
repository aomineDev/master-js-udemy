'use strict'

//Funciones
//Una funcion es una agrupación reutilizable de un conjunto de instrucciones 

//Defino la función

function porConsola(n1, n2){
	//conjunto de instrucciones a mostrar
	console.log("Suma: " + (n1 + n2));
	console.log("Resta: " + (n1 - n2));
	console.log("Multiplicación: " + (n1 * n2));
	console.log("División: " + (n1 / n2));
	console.log("_______________________");
}

function porPantalla(n1, n2){
	//conjunto de instrucciones a mostrar
	document.write("Suma: " + (n1 + n2) + "<br>");
	document.write("Resta: " + (n1 - n2) + "<br>");
	document.write("Multiplicación: " + (n1 * n2) + "<br>");
	document.write("División: " + (n1 / n2) + "<br>");
	document.write("_______________________" + "<br>");
}

function calculadora(n1, n2, mostrar = false){

	if (mostrar == false) {
		porConsola(n1, n2);

	}else{
		porPantalla(n1, n2)
	}

}

calculadora(10, 54);
calculadora(15, 45);
calculadora(15, 74, true);
calculadora(44, 45, true);

/*
for(let i = 1; i <= 10; i++) {
	calculadora(i, 8);
}
*/