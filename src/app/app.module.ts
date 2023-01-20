import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DipendenteAggiungiComponent } from './dipendente-aggiungi/dipendente-aggiungi.component';
import { DipendenteListaComponent } from './dipendente-lista/dipendente-lista.component';
import { DipendenteDettaglioComponent } from './dipendente-dettaglio/dipendente-dettaglio.component';
import { DatatransformPipe } from './datatransform.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DipendenteAggiungiComponent,
    DipendenteListaComponent,
    DipendenteDettaglioComponent,
    DatatransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
