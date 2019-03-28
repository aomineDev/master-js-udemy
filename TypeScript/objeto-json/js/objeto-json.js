'use strict'
var bicicleta = {
	color: "rojo",
	modelo: "BMX",
	frenos: "Disco",
	velocidadMaxima: "60km",
	cambiaColor: function(nuevoColor){
		//bicicleta.color = nuevoColor;
		this.color = nuevoColor;
		console.log(this);
	}
};
bicicleta.cambiaColor("verde");