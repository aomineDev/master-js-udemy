'use strict'
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(){
	var titulo = document.querySelector("#addpelicula").value;
	if(titulo.length >= 1){
		localStorage.setItem(titulo, titulo);
	}
});
var mostrar = document.getElementById("mostrar");
var ul = document.createElement("ul");
mostrar.append(ul);
for(let index in localStorage){
	if(typeof localStorage[index] == "string"){
		var li = document.createElement("li");
		li.append(localStorage[index]);
		ul.append(li);
	}
}
var formborrar = document.getElementById("borrar");
formborrar.addEventListener("submit", function(){
	var remove = document.querySelector("#removepelicula").value;
	if(remove.length >= 1){
		localStorage.removeItem(remove);
	}else{	
		alert("pelicula no encontrada");
	}
});