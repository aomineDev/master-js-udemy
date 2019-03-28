import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../service/zapatillas.service";

@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html",
    styleUrls: ['./zapatillas.component.css'],
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: Array<string>;
    public color: string;
    public miMarca: string;

    constructor(private _zapatillaService: ZapatillaService){

    }
    ngOnInit(){
        this.titulo = "Componente de Zapatillas Sports"
        this.miMarca= "Reactivo papu";
        this.color = "orange";
        this.marcas = new Array;
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
    }
    getMarcas(){
        this.zapatillas.forEach((value, index) => {
            if(this.marcas.indexOf(value.mark) < 0){
                this.marcas.push(value.mark);
            }
        });
    }
    getMarca(){
        alert(this.miMarca);
    }
    addMarca(){
        if(this.miMarca.length > 0){
            this.marcas.push(this.miMarca);
        }
    }
    removeMarca(){
        if(this.marcas.indexOf(this.miMarca) != -1){
            this.marcas.splice(this.marcas.indexOf(this.miMarca), 1);
        }
    }
    deleteMarca(index){
        this.marcas.splice(index, 1);
    }
    onBlur(){
        console.log("has salido del input");
    }
    mostrarPalabra1(){
        alert(this.miMarca);
    }
    mostrarPalabra2(){
        console.log(this.miMarca);
    }
}
