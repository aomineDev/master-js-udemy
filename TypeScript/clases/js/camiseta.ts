//Interface
interface CamisetaBase{
	setColor(color);
	getColor();
}
//Decorador
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estamapda con el logo de: " + logo);
		}
	}
}

//Clases (molde de objeto)
@estampar("Gucci Gang")
class Camiseta implements CamisetaBase{
	//Propiedades (caracteristicas del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;
	//Metodos (funciones o acciones del objeto)
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}
	public setColor(color){
		this.color = color;
	}
	public getColor(){
		return this.color;
	}
}

//Clase hijo
class Sudadera extends Camiseta{
	public capucha: boolean;
	/*setCapucha(capucha: boolean){
		this.capucha = capucha;
	}
	getCapucha():boolean{
		return this.capucha;
	}*/
}

var polo = new Camiseta("Rojo", "manga larga", "nike", "L", 20);
polo.setColor("Verde");
console.log(polo);
polo.estampacion();

/*var playera = new Camiseta();
playera.setColor("Azul");
console.log(playera);*/

var sudadera_nike = new Sudadera("Azul", "manga larga", "nike", "L", 50); 
sudadera_nike.capucha = false;
sudadera_nike.setColor("Negro");
console.log(sudadera_nike);