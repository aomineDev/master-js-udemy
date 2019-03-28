'use strict'
//Local Storage

if(typeof(Storage) !== 'undefined'){
	alert("Compatible con Local Storage");
}else{
	alert("no compatible");
}

//Guardar Datos

localStorage.setItem("titulo", "aomine bitches!");

//Recuperar Elemento

document.write(localStorage.getItem("titulo"));

//Guardas objetos

var usuarios = {
	nombre: "aomine",
	email: "xomarxpl07@outlook.es",
	web: "nibbleframe.com/aomine"
};

localStorage.setItem("usuario", JSON.stringify(usuarios));

var userjs = JSON.parse(localStorage.getItem("usuario"));

var div = document.querySelector("#div");
div.append(userjs.nombre + " - " + userjs.web);

localStorage.removeItem("titulo");
localStorage.clear();