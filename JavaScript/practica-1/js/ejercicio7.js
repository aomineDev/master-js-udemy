'use strict'
//tabla de multiplicar de un numero introducido

do{
	var n = parseInt(prompt("Introduce un número:"));
}while( isNaN(n) )
document.write("<h2>Tabla de multiplicar del " + n + "</h2>");
for(let i = 1; i <= 12; i++) {
	document.write( n + " x " + i + " = " + (n*i) + "<br>")
}
