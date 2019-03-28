var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var textHora = `
El año es: ${year}
El mes es: ${mes} Se empeiza a contar desde 0
El dia es: ${dia}
La hora es: ${horas}
Los minutos son ${minutos}
Los segundos son ${segundos}
`;
console.log(textHora);