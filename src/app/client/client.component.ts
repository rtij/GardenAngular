import { Component, OnInit } from '@angular/core';
import { Client } from '../Object/Client';
import { fade } from '../Object/MyAnimation';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],animations:[fade]
})
export class ClientComponent implements OnInit {

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
    this.getClient()
  }
  Clients!: Client[];
  ClientSearch: string="";
  selectedClient!: Client;
  action: string = "Submit";
  num: number = 0;
  clientname: string = "";
  adrcl: string = "";
  tel: string = "";

  getClient() {
    this.ClientService.getAll().subscribe((res: Client[]) => {
      this.Clients = res;
    },
      (err) => {
      }
    );
  }
  OnSelect(it: Client) {
    this.selectedClient = it;
    this.action = "Edit";
    this.adrcl = this.selectedClient.adrcl;
    this.clientname = this.selectedClient.nomcl;
    this.tel = this.selectedClient.telcl;
    this.num=1;
  }

  Action(i: any) {
    if (this.num == 0) {
      const client = new Client(this.clientname, this.adrcl, this.adrcl, true);
      this.ClientService.store(client).subscribe((res: Client[]) => {
        alert("New Record added successfuly");
        this.Clients.push(client);
        i.reset();
      },
        (err) => {
          alert(err.error)
        });
    }
    else {
      this.selectedClient.adrcl = this.adrcl;
      this.selectedClient.nomcl = this.clientname;
      this.selectedClient.telcl = this.tel;
      this.ClientService.update(this.selectedClient).subscribe((res) => {
        this.Clients = res;
        alert("Record updated successfuly");
        this.num = 0;
        this.action = "Submit";
        i.reset();
      },
        (err) => {
          alert(err.error)
        }
      );
    }
  }

  Delete(it:Client){
    this.selectedClient = it;
    this.selectedClient.clientSup = true;
    this.ClientService.update(this.selectedClient).subscribe((res)=>{
    this.Clients =  this.Clients.filter((item)=>{
        return item.idclient != this.selectedClient.idclient;
      });
      alert("Record deleted successfuly");
    },
    (err)=>{
      alert(err.error)
    })
  }

  Reset(it:any){
    it.reset();
    this.action = "submit";
    this.num = 0;
  }
}
