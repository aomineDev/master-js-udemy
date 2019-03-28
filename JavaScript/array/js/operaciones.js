'use stric'
//Operaciones con arrays

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];
var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

/*
do{
	var 	elemento = prompt("Introduze tus pelicula (Para salir escribe acabar)");
	peliculas.push(elemento);
}while(elemento != "acabar")
peliculas.pop();
*/

console.log(peliculas);
peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);

var index = peliculas.indexOf("La vida es bella");
if ( index != -1 ) {
	peliculas.splice(index, 1);
}
console.log(peliculas);

var peliculasString = peliculas.join(" ");

console.log(peliculasString);

var cadena = "texto1, texto2, texto3";
console.log(cadena);
var cadenaArray = cadena.split(", ");
console.log(cadenaArray);
