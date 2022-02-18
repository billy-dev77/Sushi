import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Commande } from '../entities/commande';
import { Plateau } from '../entities/plateau';
import { PlateauService } from '../services/plateau.service';

@Component({
  selector: 'app-plateaux',
  templateUrl: './plateaux.component.html',
  styleUrls: ['./plateaux.component.css']
})
export class PlateauxComponent implements OnInit {
  plateaux = new Array<Plateau>();
  commandeEncours = new Commande();
  modalRef?: BsModalRef;
  plateauDetails = new Plateau();


  constructor(private plateauService: PlateauService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getPlateaux();
  }

  getPlateaux() {
    this.plateauService.getBoxes().subscribe(data => {
      this.plateaux = data;
      console.log('data=', data);
    });
  }

  ajouterPanier(plateau: Plateau) {
    const temp = '';
    if (localStorage.getItem('commandeEncours')) {
      this.commandeEncours = JSON.parse(localStorage.getItem('commandeEncours')|| '{}');
    }
    this.commandeEncours.plateaux.push(plateau);
    localStorage.setItem('commandeEncours', JSON.stringify(this.commandeEncours));
  }

  showDetails(template: TemplateRef<any>, plateau: Plateau) {
    this.modalRef = this.modalService.show(template);
    this.plateauDetails = plateau;
  }

}
