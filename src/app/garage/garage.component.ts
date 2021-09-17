import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../Object/Car';
import { fade } from '../Object/MyAnimation';
import { DateToShortDate, FormateDate, getTime } from '../Object/functions';
import { GarageService } from '../services/garage.service';
import { Garage } from '../Object/Garage';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'], animations: [fade]
})
export class GarageComponent implements OnInit {

  Date: Date;
  time: Time;
  Cars!: Car[];
  GarageCar!: Garage[];
  action = "Enter";
  selectedCar!: Car;
  carN: string = "";
  CarSearch: string = "";
  change: boolean = false;

  constructor(private carSevice: CarService, private garageService: GarageService) { }

  ngOnInit(): void {
    this.getCar();
    this.Hours();
  }

  GetHours(){
  }


  Hours() {
    setTimeout(()=>{
    this.Date = new Date();
    this.time = getTime(this.Date);
    this.Date = FormateDate(this.Date);
      this.Hours();
    },100);
  }

  getGarage() {
    this.garageService.getAll().subscribe((res) => {
      this.GarageCar = res;
      this.Cars = this.filtrerCarliste(this.Cars, this.GarageCar);
    },
      (err) => {
        alert(err.error)
      })
  }

  Select() {
    const car = this.Cars.find((item) => {
      return item.matrc == this.carN;
    });
    this.selectedCar = car;
  }
  OnSelect(Car: Garage) {
    this.selectedCar = Car.matrc;
    this.change = true;
    this.action = "Exit";
    this.carN = this.selectedCar.matrc;
  }

  Register(it: any) {
    this.Hours();
    if (this.change == false) {
      this.garageService.Enter(this.selectedCar, this.Date, this.time).subscribe((res) => {
        const newG = new Garage(this.selectedCar);
        this.GarageCar.push(newG);
        this.Reset(it); 
        this.Cars = this.filtrerCarliste(this.Cars, this.GarageCar);
        this.Hours();
        alert("Data updated");
      },
        (err) => {
          alert(err.text)
        })
    }
    else {
      this.garageService.Exit(this.selectedCar, this.Date, this.time).subscribe((res) => {
        this.GarageCar = this.GarageCar.filter((item) => {
          return item.matrc.matrc != this.selectedCar.matrc
        });
        this.Cars.push(this.selectedCar);
        alert("Data updated");
        this.Hours();
        this.Reset(it);
      },
        (err) => {
          alert(err.error)
        });
    }

  }

  Reset(it: any) {
    this.action = "Enter";
    this.change = false;
    this.selectedCar = null;
    this.carN = "";
  }

  getCar() {
    this.carSevice.getAll().subscribe((res) => {
      this.Cars = res;
      this.getGarage();
    },
      (err) => {

      })
  }

  filtrerCarliste(Car: Car[], garage: Garage[]): Car[] {
    let result: Car[] = [];
    for (let it of Car) {
      let foo = garage.find((item) => {
        return item.matrc.matrc == it.matrc
      });
      if (!foo) {
        result.push(it);
      }
    }
    return result;
  }
}
