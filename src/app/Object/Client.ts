export class Client{
    nomcl: string;
    adrcl: string;
    telcl:string;
    clientSup:boolean;
    idclient?:number;
    constructor(
        nomCl:string,
        adrCl:string,
        telCl:string,
        clientSup:boolean,
        idclient?:number
        )
        {
        this.nomcl=nomCl;
        this.adrcl=adrCl;
        this.telcl = telCl;
        this.clientSup = clientSup;
        }
}