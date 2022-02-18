import { Plateau } from './plateau';

export class Commande {
    plateaux: Array<Plateau>;
    type: string;
    date: Date;
    constructor() {
        this.plateaux = new Array<Plateau>();
        this.date = new Date();
    }
}
