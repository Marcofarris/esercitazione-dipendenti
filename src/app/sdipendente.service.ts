import { Injectable } from '@angular/core';
import { CDipendente } from './c-dipendente';

@Injectable({
  providedIn: 'root'
})
export class SDipendenteService {
  Lista: CDipendente[] = []

  id: number;
  nuovaData:Date;

  constructor() {
    this.id = 0;
    this.nuovaData = new Date
    this.Lista.push(new CDipendente(this.id, 'Marco', 'Far', this.nuovaData , "marco@gm.it"))
  }

  addDip(dip: any) {
    this.id++;
    this.Lista.push(new CDipendente(this.id, dip[0], dip[1], dip[2], dip[3]))
  }

  getList(){
    return this.Lista
  }

  selectDip(num:number){
    for (let index = 0; index < this.Lista.length; index++) {
      if(this.Lista[index].id == num){
        return this.Lista[index]
      }
      
    }

  }

  
}
