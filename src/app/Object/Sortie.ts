import { Time } from "@angular/common";
import { Car } from "./Car";

export class Sortie{
    dates:Date;
    heures:Time;
    matrc:Car;
    constructor(
        date:Date,
        time:Time,
        Car:Car
    ){
        this.matrc= Car;
        this.dates = date;
        this.heures= time;
    }
}