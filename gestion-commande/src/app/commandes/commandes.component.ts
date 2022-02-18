import { Component, OnInit } from '@angular/core';
import { Commande } from '../entities/commande';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes = new Array<Commande>();

  constructor() { }

  ngOnInit() {
    this.commandes = JSON.parse(localStorage.getItem('commandes') || '{}');
  }


}
