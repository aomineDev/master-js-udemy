'use strict'
window.addEventListener("load", function(){
	alert("DOM cargado");
	var nombreV = document.querySelector("#nombreV");
	var apellidoV = document.querySelector("#apellidoV");
	var edadV = document.querySelector("#edadV");
	var formulario = document.querySelector("#formulario");
	formulario.addEventListener("submit", function(){
		var nombre = document.getElementById("nombre").value;
		var apellidos = document.getElementById("apellidos").value;
		var edad = parseInt(document.getElementById("edad").value);
		if(nombre == null || nombre.length == 0){
			nombreV.innerHTML = "Nombre no valido";
			nombreV.style.color = "#FB2A2A";
			
		}else{
			nombreV.innerHTML = "Nombre valido";
			nombreV.style.color = "#1FFB08";
		}
		if(apellidos.trim() == null || apellidos.trim().length == 0){
			apellidoV.innerHTML = "Apellido no valido";
			apellidoV.style.color = "#FB2A2A";
			
		}else{
			apellidoV.innerHTML = "Apellido valido";
			apellidoV.style.color = "#1FFB08";
		}
		if(edad == null || isNaN(edad)){
			edadV.innerHTML = "Edad no valida";
			edadV.style.color = "#FB2A2A";
			return false;
		}else{
			edadV.innerHTML = "Edad valida";
			edadV.style.color = "#1FFB08";
		}
		var p = document.getElementById("p");
		var p1 = document.getElementById("p1");
		var p2 = document.getElementById("p2");
		var p3 = document.getElementById("p3");
		p.innerHTML= "Información del usuario <hr>";
		p1.innerHTML = "Nombre:" + nombre;
		p2.innerHTML = "Apellidos: " + apellidos;
		p3.innerHTML = "Edad: " + edad;
	});
});