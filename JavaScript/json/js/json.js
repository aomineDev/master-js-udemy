// JSON -> JavaScript Object Notation
var pelicula = {
	titulo: "Batman vs Superman",
	year: 2017,
	pais: "Estados Unidos"
};
var peliculas = [
{
	titulo: "La verdad duele",
	year: 2016,
	pais: "Francia"
}, pelicula];
var div = document.getElementById("pelis");
for(let index in peliculas){
	var p = document.createElement("p");
	p.append((parseInt(index) + 1) + ". " + peliculas[index].titulo + " - " + peliculas[index].year);
	div.append(p);
}