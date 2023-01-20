import { Component  } from '@angular/core';
import { SDipendenteService } from '../sdipendente.service';
import { CDipendente } from '../c-dipendente';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dipendente-lista',
  templateUrl: './dipendente-lista.component.html',
  styleUrls: ['./dipendente-lista.component.css']
})
export class DipendenteListaComponent {

  id:number
  email:string
  lista:CDipendente[];
  currentItem: CDipendente;
  isSelected:boolean = false;


    constructor(private dipService: SDipendenteService){
      this.lista = dipService.getList()
    }

  
     selectDip(num:number){
      this.isSelected = true
      this.currentItem = this.dipService.selectDip(num)
    }

}
