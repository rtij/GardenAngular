import { Client } from './Client';

export class Car {
    matrc: string;
    nomv: string;
    couleurc: string;
    idclient: Client;
    carSup: boolean;
    constructor(
        matrC: string,
        nomv: string,
        color: string,
        Client: Client,
        carSup:boolean
    ) {
        this.matrc = matrC;
        this.nomv = nomv;
        this.couleurc = color;
        this.idclient = Client;
        this.carSup = carSup;
    }
}