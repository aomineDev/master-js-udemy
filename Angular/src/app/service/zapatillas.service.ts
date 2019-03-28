import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Zapatilla[];
    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike Airmax', 'Nike', 'Rojo', 60, true),
            new Zapatilla('Rebook clasic', 'Rebook', 'Blanco', 80, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 120, false),
            new Zapatilla('Rebook Spartan', 'Rebook', 'Negro', 150, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Blanco', 100, false)
        ];
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
