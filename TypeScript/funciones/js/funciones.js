var n = parseInt(prompt("Ingrese un número: "));
//Funcioes
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
alert(getNumero(n));
