'use strict'

//Como hacer plantillas de texto
var nombre = prompt("Ingrese su nombre");
var apellidos = prompt("Ingrese sus apellidos");
var texto = `
<h1>Hola!</h1>
<h3>Tu nombre es: ${nombre}</h3>
<h3>Tus apellidos son: ${apellidos}</h3>
`;
document.write(texto);