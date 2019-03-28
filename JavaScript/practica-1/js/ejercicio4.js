'use strict'
//programa que halla todo los numeros impares en el rango de los numeros introducidos

var txt = document.getElementById("txt");
do{
	alert("el primer número tiene que ser menor que el segundo");
	var  n = parseInt(prompt("introduzca el primer número"));
	var  m = parseInt(prompt("introduzca el segundo número"));
}while( n >= m || isNaN(n) || isNaN(m) )

while(n <= m ){
	if ( n % 2 != 0 ) {
		txt.innerHTML += n + "<br>";
	}
	n++;
}