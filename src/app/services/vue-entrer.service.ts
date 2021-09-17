import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Entrer } from '../Object/Enter';
import { Sortie } from '../Object/Sortie';
import { Sortievue } from '../Object/Sortievue';

@Injectable({
  providedIn: 'root'
})
export class VueEntrerService {

  constructor(private http:HttpClient) { }
  EnterListe!:Entrer[];
  SortieListe!:Sortievue[];

  getEnter(): Observable<Entrer[]> {
    return this.http.get(`https://127.0.0.1:8000/api/Enter`).pipe(
      map((res: any) => {
        this.EnterListe = res['data'];
        return this.EnterListe;
      }),
      catchError(this.handleError));
  }
  
  getExit(): Observable<Sortievue[]> {
    return this.http.get(`https://127.0.0.1:8000/api/Exit`).pipe(
      map((res: any) => {
        this.SortieListe = res['data'];
        return this.SortieListe;
      }),
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError(error);
  }
}
