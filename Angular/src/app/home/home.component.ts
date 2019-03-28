import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public identificar: boolean;
  constructor() {
  }

  ngOnInit() {
    this.identificar = false;
  }
  setIdentificado(){
      this.identificar = true;
  }
  unSetIdentificado(){
    this.identificar = false;
}
}
