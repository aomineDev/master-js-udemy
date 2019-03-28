'use strict'
//Fecth(ajax) y peticiones a servicios / apis Rest
var div_usuarios = document.getElementById("usuarios");
var div_janet = document.getElementById("janet");
var div_profesor = document.getElementById("profesor");
var profesor = {
	nombre: "aomine",
	apellidos: "daiki",
	url: "https://aomine.nibbleframe.com"
};
function getUsuarios(){
	return fetch("https://reqres.in/api/users");
}
function getJanet(){
	return fetch("https://reqres.in/api/users/2");
}
function getInfo(){
	return new Promise((resolve, reject) => {
		var profesor_string = "";
		setTimeout(function(){
			profesor_string = JSON.stringify(profesor);
			if (typeof profesor_string != "string" || profesor_string == "") return reject("error 1");
			return resolve(profesor_string);
		}, 1000)

	});
}
getUsuarios()
.then(data => data.json())
.then(users => {
	listadoUsuarios(users.data);
	return getInfo();
}).then(data => {
	mostrarProfesor();
	return getJanet();
})
.then(data => data.json())
.then(janet => {
	mostrarJanet(janet.data);
});
function listadoUsuarios(usuarios){
	usuarios.map( (user, i) => {
		let nombre = document.createElement("p");
		nombre.innerHTML = "<p />" + user.id + ". "+ user.first_name + " " + user.last_name;
		div_usuarios.append(nombre);
		var loading = document.querySelector(".loading");
		loading.style.display = "none";
	});
}
function mostrarJanet(user){
	let nombre = document.createElement("p");
	let avatar = document.createElement("img");
	nombre.innerHTML = "<p />" + user.id + ". "+ user.first_name + " " + user.last_name;
	avatar.src = user.avatar;
	avatar.width = "100";
	div_janet.append(avatar);
	div_janet.append(nombre);
	var loading = document.querySelector("#janet .loading");
	loading.style.display = "none";
}
function mostrarProfesor(){
	let nombre = document.createElement("p");
	nombre.innerHTML = "<p /> "+ profesor.nombre + " " + profesor.apellidos + " - " + profesor.url;
	div_profesor.append(nombre);
	var loading = document.querySelector("#profesor .loading");
	loading.style.display = "none";
}
/*
getUsuarios()
.then(data => data.json())
.then(users => {
	listadoUsuarios(users.data);
});
getJanet()
.then(data => data.json())
.then(janet => {
	mostrarJanet(janet.data);
});
*/