'use strict'
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	var nombre = document.getElementById("nombre").value;
	if (nombre.length > 0) {
		localStorage.setItem(nombre, nombre);
	}
});
var ul = document.getElementById("ul");
for(let i in localStorage){
	var li = document.createElement("li");
	if (typeof localStorage[i] == "string") {
		li.append(localStorage[i]);
		ul.append(li);
	}
}
var eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", function(){
	var nombreEliminar = document.getElementById("nombreEliminar").value;
	if (nombreEliminar.length > 0) {
		localStorage.removeItem(nombreEliminar);
	}
});