import { Component, OnInit } from '@angular/core';
import { Entrer } from '../Object/Enter';
import { Sortie } from '../Object/Sortie';
import { Sortievue } from '../Object/Sortievue';
import { DateToShortDate, FormateDate, getTime } from '../Object/functions';
import { Vue } from '../Object/Vue';
import { VueEntrerService } from '../services/vue-entrer.service';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.css']
})
export class VueComponent implements OnInit {

  constructor(private HistoryService:VueEntrerService) { }

  ngOnInit(): void {
    this.getAll();
    this.getDate();
  }
  Search:Date;
  EnterListe!:Entrer[];
  ExitListe!:Sortievue[];
  Original:Vue[]=[];
  MyListe:Vue[]=[];

  getDate(){
    this.Search = new Date();
    this.Search = FormateDate(this.Search);
  }

  getAll(){
    this.HistoryService.getEnter().subscribe((res)=>{
      this.EnterListe = res;
      this.HistoryService.getExit().subscribe((res)=>{
        this.ExitListe = res;
        this.Construct();
        console.log(this.MyListe);
      }, 
      (err)=>{
        console.log(err.error);
      })
    },
    (err)=>{
      alert(err.error)
    })
  }

  Construct() {
    for(let it of this.EnterListe){
      const newE= new Vue(it.datee,it.heuree,it.matrc,true);
      this.Original.push(newE);
    }
    for(let it of this.ExitListe){
      const newE= new Vue(it.datee,it.heuree,it.matrc,false);
      this.Original.push(newE);
    }
    this.MyListe = this.Original.filter((item)=>{
      return item.Date == this.Search;
    });
    this.MyListe =  this.MyListe.sort((a,b)=>{if(a.time>b.time){
      return -1
    }
    else{
      return 1
    }
  });
  console.log(this.MyListe);
  }
}
