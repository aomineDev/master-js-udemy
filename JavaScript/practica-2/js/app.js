'use strict'
//Programa que: 
//1. Pida 6 numeros por pantalla
//2. Mostrar el Array en el body de la pagina y en la consola
//3. 	Ordernar y mostrarlo
//4. Invertir su orden y mostrarlo
//5. Mostrar cuantos elementos tiene el array
//6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice

var arr = [],
arr1 = [],
parrafo = document.getElementById("parrafo"),
btn = document.getElementById("btn");
btn.addEventListener("click", buscar);

//1.

var contador = 0;
do{
	let n = parseInt(prompt("Introduzaca 6 numeros:"));
	if (!isNaN(n)) {
		arr.push(n);
		arr1.push(n);
		contador++;
	}else{
		alert("Introduze solo números");
	}
}while(contador < 6)

//	2.

parrafo.innerHTML += "<h1>1. Estos son los 6 números que introduciste:</h1>";
console.log("1. Estos son los 6 números que introduciste:");
mostrarArray();

//3.

parrafo.innerHTML += "<h1>2. Estos son los 6 números Ordenados:</h1>";
arr.sort((a, b) => a - b); //arr.sort(function(a, b){return a - b}); orden ascednete //arr.sort(function(a, b){return b - a}); orden descendente
console.log("2. Estos son los 6 números Ordenados:");
mostrarArray();

//4.

parrafo.innerHTML += "<h1>3. Estos son los 6 números Ordenados Invertidos:</h1>";
arr.reverse();
console.log("3. Estos son los 6 números Ordenados Invertidos:");
mostrarArray();

//5.

parrafo.innerHTML += "<h1>4. El array tiene " + arr.length + " elemtos</h1>";

//6.

function buscar(){
	do{
		var search = parseInt(prompt("Introduce el número que buscas:"));
	}while(isNaN(search));
	var index = arr1.indexOf(search); //var index = arr1.findIndex(numero => numero == search);
	if ( index == -1 ) {
		alert ("El número " + search + " no se encuentra en el array");
	}else{
		alert ("El número " + search + " si existe en el array con indice: " + index + " y posición: " + (index + 1));
	}
}

//Funciones

function mostrarArray(){
	arr.forEach((elemento, indice) => {
		parrafo.innerHTML += (indice + 1) + ".- " + elemento + "<br>";
		console.log(elemento);
	});
}