import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Commande } from '../entities/commande';
import { Plateau } from '../entities/plateau';

@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent implements OnInit {
  commande = new Commande();
  total = 0;
  commandes = new Array<Commande>();
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.commande = JSON.parse(localStorage.getItem('commandeEncours') || '{}')
    this.calculTotal();
  }

  supprimerPlateau(plateauASupprimer: Plateau) {
    for(let plateau of this.commande.plateaux) {
      if (plateau === plateauASupprimer) {
        this.commande.plateaux.splice(this.commande.plateaux.indexOf(plateau), 1);
        break;
      }
    }
    localStorage.setItem('commandeEncours', JSON.stringify(this.commande));
    this.calculTotal();
  }

  calculTotal() {
    this.total= 0;
    for(let plateau of this.commande.plateaux) {
      this.total += plateau.prix;
    }
  }

  validerCommande() {
    if (localStorage.getItem('commandes')) {
      this.commandes = JSON.parse(localStorage.getItem('commandes') || '{}')
    }
    this.commandes.push(this.commande);
    localStorage.setItem('commandes', JSON.stringify(this.commandes));
    localStorage.removeItem('commandeEncours');
    this.commande = new Commande();
    this.modalRef?.hide();
  }

  showTypeCommande(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
