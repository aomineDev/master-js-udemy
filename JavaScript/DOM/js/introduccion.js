'use strict'
//Introduccion al DOM - Document Object Model

//Conseguir elementos por su id
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "Soy una caja"
caja.style.color = "#18721a";
caja.className = "hola";
caja.style.fontSize = "30px";

//Conseguir Elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
//console.log(todosLosDivs[0].textContent);
var seccion = document.querySelector("#seccion");
for(let valor of todosLosDivs) {
	var parrafo = document.createElement("p");	
	var texto= document.createTextNode(valor.textContent);
	parrafo.appendChild(texto);	
	seccion.prepend(parrafo);
	//console.log(valor.textContent);
}
var hr = document.createElement("hr");
seccion.appendChild(hr);

//Conseguir Elementos por su clase
var divRojos = document.getElementsByClassName("rojo");
divRojos[0].style.color = "#12afde";
console.log(divRojos);
var divAmarillo = document.getElementsByClassName("amarillo");
console.log(divAmarillo);

//Query Selector
var rojitos = document.querySelectorAll(".rojo");
console.log(rojitos);
var divAmarillo = document.querySelector(".amarillo");
console.log(divAmarillo);