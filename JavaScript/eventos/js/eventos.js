'use strict'

//Eventos del mouse

var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var input = document.getElementById("nombre");
btn.addEventListener("click", cambioColor);
function cambioColor(){
	if (this.style.background == "rgb(83, 232, 9)") {
		this.style.background = "";
	}else{
		this.style.background = "rgb(83, 232, 9)";
	}
}

//Evento mouse over

btn2.addEventListener("mouseover", cambioColor2);
function cambioColor2(){
	btn2.style.background = "rgb(121, 112, 255)";
}

//Evento mouse out

btn2.addEventListener("mouseout", cambioColor3);
function cambioColor3(){
	btn2.style.background = "";
}

//Focus

nombre.addEventListener("focus", foco);
function foco(){
	console.log("Estas dentro del input");
}

//Blur
nombre.addEventListener("blur", blur);
function blur(){
	console.log("Estas fuera del input");
}

//Keydown

nombre.addEventListener("keydown", down);
function down(event){
	console.log("Estas pulsando una tecla " + String.fromCharCode(event.keyCode));
}

//keypress

nombre.addEventListener("keypress", press);
function press(event){
	console.log("Tecla presionada " + String.fromCharCode(event.keyCode));
}

//keyup

nombre.addEventListener("keyup", up);
function up(event){
	console.log("Tecla presionada " + String.fromCharCode(event.keyCode));
}