import { Composition } from "./composition";

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