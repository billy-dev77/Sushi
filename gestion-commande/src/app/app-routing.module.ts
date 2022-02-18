import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeEnCoursComponent } from './commande-en-cours/commande-en-cours.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PlateauxComponent } from './plateaux/plateaux.component';
import { RGPDComponent } from './rgpd/rgpd.component';

const routes: Routes = [
  { path: 'mes-commandes', component: CommandesComponent },
  { path: 'plateaux', component: PlateauxComponent },
  { path: 'en-cours', component: CommandeEnCoursComponent },
  {path: 'rgpd', component: RGPDComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
