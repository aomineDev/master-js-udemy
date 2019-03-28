'use strict'
//programa para hallar la suma y el promedio de varios numeros

var suma = 0;
var contador = 0;

do{
	var n = parseFloat(prompt("introduce números hasta un negativo:"));
	if ( isNaN(n) ) {
		n = 0;
	}else if(n > 0){
		suma += n;
		contador++;
	}
}while(n > 0);

alert("la suma es: " + suma );
alert("la media es: " + (suma/contador) );