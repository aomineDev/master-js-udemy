'use strict'
//programa que muestre todo los divisores de un numeró introducido por el usuario  	

do{
	var n = parseInt(prompt("Ingrese un número entero mayor a 0:"));
}while( n <= 0 || isNaN(n) )
document.write("los divisores de " + n + " son:<p>");
for(let i = 1; i <= n; i++) {
	if (n % i == 0) {
		document.write(i + "<br>")
	}
}
