import { Time } from "@angular/common";
import { Car } from "./Car";

export class Vue{
    Date:Date;
    time:Time;
    Car:Car;
    type:boolean;
    constructor(
        date:Date,
        time:Time,
        Car:Car,
        type:boolean
    ){
        this.Car= Car;
        this.Date = date;
        this.time = time;
        this.type = type
    }
}