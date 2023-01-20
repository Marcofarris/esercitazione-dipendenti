import { Component } from '@angular/core';
import { CDipendente } from '../c-dipendente';
import {FormsModule} from "@angular/forms";
import { SDipendenteService } from '../sdipendente.service';

@Component({
  selector: 'app-dipendente-aggiungi',
  templateUrl: './dipendente-aggiungi.component.html',
  styleUrls: ['./dipendente-aggiungi.component.css']
})
export class DipendenteAggiungiComponent {
  model:string[] = []
  nome:string;
  cognome:string;
  data:string;
  email:string;

  constructor(private dipService: SDipendenteService) {

  }

  onSubmit(){
    this.model.push(this.nome)
    this.model.push(this.cognome)
    this.model.push(this.data)
    this.model.push(this.email)
    this.dipService.addDip(this.model)
  }

  reset(){
    this.nome = ''
    this.cognome = ''
    this.data = ''
    this.email = ''
  }
}
