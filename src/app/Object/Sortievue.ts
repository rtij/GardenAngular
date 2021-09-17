import { Time } from "@angular/common";
import { Car } from "./Car";

export class Sortievue{
    datee:Date;
    heuree:Time;
    matrc:Car;
    constructor(
        date:Date,
        time:Time,
        Car:Car
    ){
        this.matrc= Car;
        this.datee = date;
        this.heuree= time;
    }
}