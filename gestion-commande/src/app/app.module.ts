import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeEnCoursComponent } from './commande-en-cours/commande-en-cours.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PlateauxComponent } from './plateaux/plateaux.component';
import { FormsModule } from '@angular/forms';
import { RGPDComponent } from './rgpd/rgpd.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandeEnCoursComponent,
    CommandesComponent,
    PlateauxComponent,
    RGPDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
