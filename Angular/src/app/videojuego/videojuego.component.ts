import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "videojuego",
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;
    public ocultar: boolean = true;
    constructor(){
      this.titulo = "Componente de Videojuegos";
      this.listado = "Listado de los juegos mas populares";
      //console.log("Se ha ejecutado el componente: videojuego.componentes.ts");
    }
    ngOnInit(){
        //console.log("OnInit Ejecutado");
    }
    ngDoCheck(){
       // console.log("DoCheck ejecutado");
    }
    ngOnDestroy(){
        //console.log("OnDestroy Ejecutado");
    }
    cambiarTitulo1(){
            this.titulo = "Nuevo titulo del componente";
            this.ocultar = false;
    }
    cambiarTitulo2(){
        this.titulo = "Componente de Videojuegos";
        this.ocultar = true;
    }
}
