'use strict'
//Funciones Texto
//Transformación de textos

var numero = 44;
var texto1 = "Bienvenido al curso";
var texto2 = "ES UN BUEN CURSO";

console.log(numero + " es un " + typeof numero);
console.log(texto1);
console.log(texto2);

var dato1 = numero.toString(), //Convierte el numero en un string
dato2 = texto1.toUpperCase(), //Conviere el string a mayusculas
dato3 = texto2.toLowerCase(); //COnvierte el string a minusculas

console.log(dato1 + " es ahora un " + typeof dato1);
console.log(dato2);
console.log(dato3);

//Length
var nombre = "Omar"; 
var apellido = "Carrión";
console.log(nombre.length);
console.log(apellido.length);

//Concatenar 
var textoTotal = nombre.concat(" " + apellido); //Concatena 2 variables
console.log(textoTotal);

//Busqueda
var busqueda1 = texto1.indexOf("curso"), //Busca la palabra y devuelve donde inicia
busqueda2 = texto1.lastIndexOf("curso"), //Busca la ultima palabra que se busca 
busqueda3 = texto1.search("curso"), //Busca la palabra y devuelve donde inicia NO ES IGUAL A indexOf
busqueda4 = texto1.match("curso"), //Devuelve  un array con los datos de la busqueda
busqueda5 = texto1.startsWith("Bienvenido"), //true si encuenta el string en la parte inicial del string
busqueda6 = texto1.endsWith("curso"), //true si encuentra el string en la parte final del string
busqueda7 = texto1.includes("curso"); //true si se encuentra el string flase si no
console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);

//Sacar trozos de un string
var trozo1 = texto1.substr(14, 5), //Extrae un string desde el n° de caracter asignado de un string
trozo2 = texto1.charAt(11); //Extrae un caracter del string desde el n° de caracter asignado de un string
console.log(trozo1);
console.log(trozo2);

//Reemplzar
var remplazar = texto1.replace("curso", "matadero :v"), //Remplaza texto en un string
remplazar2 = texto1.slice(11), //Imprime el texto desde el n° de caracter asignado de un string
remplazar3 = texto1.split(" "), //Mete los elementos en un array
remplazar4 = texto1.trim(); //Borrar los espacios por delante y por detras en un string
console.log(remplazar);
console.log(remplazar2);
console.log(remplazar3);
console.log(remplazar4);