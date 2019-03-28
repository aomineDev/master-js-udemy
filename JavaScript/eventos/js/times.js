'use strict'

var stop = document.getElementById("stop");
var start = document.getElementById("start");

//Timers

/*
window.addEventListener("load", times);
function times(){

	//Timer

	var tiempo = setInterval(repetir, 1000);
	function repetir(){
		console.log("repitiendo");
	}
	stop.addEventListener("click", stopInterval);
	function stopInterval(){
		alert("has parado el Intervalo");
		clearInterval(tiempo);
	}
	start.addEventListener("click", startInterval);
	function startInterval(){
		alert("has iniciado el Intervalo");
		tiempo = setInterval(repetir, 1000);
	}
}
*/

start.addEventListener("click", startInterval);
function startInterval(){
	var interval = setInterval(saludar, 1000);
	function saludar(){
		console.log("Hola");
	}
	stop.addEventListener("click", stopInterval);
	function stopInterval(){
		clearInterval(interval);
	}
}
