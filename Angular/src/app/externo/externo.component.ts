import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
    public user: any;
    public userId: any;
    public fecha: any;
    public newUser: any;
    public usuarioGuardado: any;
  constructor(
      private _peticionesService: PeticionesService
  ) {
      this.userId = 1;
      this.newUser = {
            'name': '',
            'job': ''
      };
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date();
  }
  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
        result => {
            this.user = result.data;
        },
        error => {
            console.log(<any>error);
        }
    );
  }
  onSubmit(form){
    this._peticionesService.addUser(this.newUser).subscribe(
        response => {
            console.log(response);
            this.usuarioGuardado = response;
            form.reset();
        },
        error => {
            console.log(<any>error);
        }
    );
  }

}
