'use strict'

//Array - Arreglos - Matrices

var nombre = "Jose";
var nombres = ["Omar", "Carlos", "Pedro"];

var lenguajes = new Array("PHP", "GO", "JS");

/*
do{
	var elemento = parseInt(prompt("Que lenguaje quieres (Como maximo 2 y como minimo 0)"));
}while(elemento < 0 || isNaN(elemento) || elemento > (lenguajes.length - 1));

alert("Elegiste " + lenguajes[elemento]);

console.log(nombre);
console.log(nombres.length);
console.log(lenguajes);
*/

//Usando for
document.write("<h1>Lenguajes de programación 2018</h1>");
document.write("Usando for");
document.write("<ul>");
for(let i = 0; i < lenguajes.length; i++){
	document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");

//Usando forEach
document.write("Usando forEach");
document.write("<ul>");
lenguajes.forEach((elemento, index) => {
	document.write("<li>" + (index + 1) + ". " + elemento + "</li>")
});
document.write("</ul>");

//Usando for in
document.write("Usando for in");
document.write("<ul>");
for(let i in lenguajes){
	document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");

//Usando for of
document.write("Usando for of");
document.write("<ul>");
for(let i of lenguajes){
	document.write("<li>" + i + "</li>");
}
document.write("</ul>");

//Busqueda

var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP"
})
console.log(busqueda);

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS")
console.log(busqueda);

var precios = [10, 20, 50, 80, 12];
var search = precios.some(precio => precio <= 90 );
console.log(search);