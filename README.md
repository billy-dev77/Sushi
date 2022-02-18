# SushiFast
Pour ce pojet nous devons crée une application web de vente de sushi ou deux scenario etait possible dans un premier temp: <br>
1. Si l’opérateur prend la commande par téléphone pour une livraison à domicile <br>
2. Ou le serveur prend une commande pour une consommation sur place.

# Les attendus fonctionnels demandées.
1. Dans un premier temp nous devons afficher la liste des plateaux de Sushi <br>
2. Pouvoir voir les details d'un plateau. <br>
3. L'achat d'un ou plusieurs plateaux sous forme d'un panier <br>
4. Visualiser les commandes sauvegardées localement <br>
5. Mise en place du RGPD <br> 

# Les attendus  techniques demandés: <br>
1. Interrogation d’une API existante via la saisie d’informations dans un formulaire, <br>
2. Définition d’une entité objet pour la représentation des données, <br>
3. Affichage de la liste des objets, accès au détail, calcul du montant de la commande, <br>
4. Sauvegarde locale côté client (LocalStorage), <br>
5. Prise en compte d’au moins 2 Evil User Stories (prévoir un tableau des actions redoutées) <br>
6. Test unitaire (au moins 3) - par exemple concernant la gestion d’une commande <br>

# La liste des plateaux

![Image text](/angular/Sushi-main/images)

# Définitoin d'une enitté objet pour la répresentztion des données.
```
export class Commande {
    plateaux: Array<Plateau>;
    type: string;
    date: Date;
    constructor() {
        this.plateaux = new Array<Plateau>();
        this.date = new Date();
    }
}

```
```
export class Composition {
    nom: string;
    quantite: number;
}

```
```
export class Plateau{
    id: number;
    nom: string;
    pieces: number;
    composition: Array<Composition>;
    saveurs: Array<String>;
    prix: number;
    image: string;
    
    constructor() {
        this.saveurs = new Array<string>();
        this.composition = new Array<Composition>();
    }
}
```

voici nos 3 entitées pour la representation des donnée des Commande , des plateaux et des Composition.

# Affichage de la liste des objets, accès au détail, calcul du montant de la commande

```
  calculTotal() {
    this.total= 0;
    for(let plateau of this.commande.plateaux) {
      this.total += plateau.prix;
    }
  }
```
 pour le calcul de montant toal voici ce qu'on n'a coder.

```
  showDetails(template: TemplateRef<any>, plateau: Plateau) {
    this.modalRef = this.modalService.show(template);
    this.plateauDetails = plateau;
  }

}
```
ceci va permttre d'afficher les detail de la commande , dans c'est detaille vous toruverez la saveur ainsi que la composition. <br>

```
<div class="modal-body">
      <p style="font-weight: bold;">Saveurs : </p>
      <ul *ngFor="let saveur of plateauDetails.saveurs">
        <li>{{saveur}}</li>
      </ul>
```

```
 <p style="font-weight: bold;">Composition : </p>
      <table class="table table-success table-striped">
        <tr>
          <th>Nom</th>
          <th>Quantité</th>
        </tr>
        <tr *ngFor="let comp of plateauDetails.composition">
          <td>{{comp.nom}}</td>
          <td>{{comp.quantite}}</td>
        </tr>
```

# Sauvegarde locale côté client (LocalStorage)
ce qui va permttre de stocker les donnée dans les memoire du navigateur 

