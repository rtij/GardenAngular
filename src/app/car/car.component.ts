import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../Object/Car';
import { Client } from '../Object/Client';
import { fade } from '../Object/MyAnimation';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'], animations: [fade]
})
export class CarComponent implements OnInit {

  constructor(private clientService: ClientService, private carService: CarService) { }

  ngOnInit(): void {
    this.getClient();
    this.getCar();
  }

  Clients!: Client[];
  selectedClient!: Client;
  selectedCar!: Car;
  carN: string = "";
  brandC: string = "";
  color: string = "";
  clientName: string = "";
  change: number = 0;
  CarSearch!: string;
  Cars!: Car[];
  action: string = "Submit";

  Select() {
    const result: any = this.Clients.find((item) => {
      return item.nomcl == this.clientName
    });
    this.selectedClient = result;
  }

  getCar() {
    this.carService.getAll().subscribe((res) => {
      this.Cars = res;
    },
      (err) => {

      });
  }

  Register(f:any) {
    if (this.change == 0) {
      const newC = new Car(this.carN, this.brandC, this.color, this.selectedClient, false);
      this.carService.store(newC).subscribe((res) => {
        this.Cars.push(newC);
        this.Reset(f);
      },
        (err) => {
          alert(err.error);
        }
      );
    }
    else {
      this.selectedCar.couleurc = this.color;
      this.selectedCar.matrc = this.carN;
      this.selectedCar.nomv = this.brandC;
      this.selectedCar.idclient = this.selectedClient;
      this.carService.update(this.selectedCar).subscribe((res) => {
        alert("Record updated successfuly");
        this.change = 0;
        this.action = "Submit";
        this.Reset(f);
      },
        (err) => {
          alert(err.text);
        })
    }
  }

  OnSelect(it: Car) {
    this.change = 1;
    this.selectedCar = it;
    this.color = this.selectedCar.couleurc;
    this.brandC = this.selectedCar.nomv;
    this.carN = this.selectedCar.matrc;
    this.clientName = this.selectedCar.idclient.nomcl;
    this.selectedClient = this.selectedCar.idclient;
    this.action = "Edit";
    alert(this.selectedCar.couleurc);
  }

  Delete(it: any) {
    this.selectedCar = it;
    this.carService.delete(this.selectedCar).subscribe((res) => {
      this.Cars = this.Cars.filter((item) => {
        return item.matrc != this.selectedCar.matrc
      });
      alert('Record deleted successfuly');
    },
      (err) => {
        alert(err.text);
      })
  }

  Reset(i: any) {
    i.reset();
    this.change = 0;
    this.action = "Submit";
  }
  getClient() {
    this.clientService.getAll().subscribe(
      (res) => {
        this.Clients = res;
      }
    );
  }
  show() {
    alert(this.color);
  }
}
