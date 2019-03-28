console.log("Hola Mundo con TypeScript");

//String
let cadena: string | number = "aomine";
cadena = 7;
console.log(cadena);

//number
let number: number = 15;
console.log(number);

//boolean
let true_false: boolean = true;
console.log(true_false);

//any
let cualquiera: any = "hola";
console.log(cualquiera);

//arrays
var lenguajes: Array<string> = ["PHP", "JS", "Ruby"];
var year: number[] = [12, 13, 14];
console.log(lenguajes);
console.log(year);

//Crear tipos de variables
type alfanumerico = string | number;
var stringNumber: alfanumerico = 1;
console.log(stringNumber);

//let VS var
var n1 = 10;
var n2 = 12;

if (n1 == 10) {
	let n1 = 44;
	var n2 = 55;
	let n3 = 156;

	console.log(n1, n2, n3);
}
console.log(n1, n2);