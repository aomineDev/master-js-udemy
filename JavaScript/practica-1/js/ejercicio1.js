'use strict'
//programa para hallar el numero mayor y menor

do{
	var a = parseFloat(prompt("introduce el primer número:"));
	var b = parseFloat(prompt("introduce el segundo número:"));
}while( isNaN(a) || isNaN(b) )

if (a > b) {
	alert("el numero mayor es: " + a);
	alert("el número menor es: " + b);
}else if (a < b){
	alert("el numero mayor es: " + b);
	alert("el número menor es: " + a);
}else if (a == b){
	alert("los numeros " + a + " y " + b + " son inguales.");
}else{
	alert("introduce numeros correctos.");
}
