import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Kurumi';
  public visible_videojuegos: boolean = true;
  public descripcion: String;
  public config;
  ocultarVideojuegos(value){
      this.visible_videojuegos = value;
    }
    constructor(){
        this.title = Configuracion.titulo;
        this.descripcion = Configuracion.descripcion;
        this.config = Configuracion;
    }   
}
