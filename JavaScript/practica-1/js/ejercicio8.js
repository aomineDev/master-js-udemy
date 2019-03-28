'use strict'
//Calculadora
do{
	alert("Ingrese 2 numeros");
	var n = parseFloat(prompt("Ingrese el Primer Número: "));
	var m = parseFloat(prompt("Ingrese el Segundo Número: "));
}while( isNaN(n) || isNaN(m) )
document.write("Calculadora pro :v<p>");
document.write( n + " + " + m + " = " + (n + m) + "<br>" );
document.write( n + " - " + m + " = " + (n - m) + "<br>" );
document.write( n + " x " + m + " = " + (n * m) + "<br>" );
document.write( n + " ÷ " + m + " = " + (n / m) + "<br>" );