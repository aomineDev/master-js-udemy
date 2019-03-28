'use strict'
//programa que indica si un numero es par o impar
do{
	var n = parseInt(prompt("ingrese un número:"));
}while( n <= 0 || isNaN(n) );

if (n % 2 == 0) {
	document.write("el número " + n + " es par");
}else{
	document.write("el número " + n + " es impar");
}