import { Time } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Garage } from '../Object/Garage';
import { Car } from '../Object/Car';


@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private http: HttpClient) { }
  Garage!:Garage[];


  getAll(): Observable<Garage[]> {
    return this.http.get(`https://127.0.0.1:8000/api/Garage/liste`).pipe(
      map((res: any) => {
        this.Garage = res['data'];
        return this.Garage;
      }),
      catchError(this.handleError));
  }
  Enter(car: Car,Date:Date,Time:Time): Observable<Garage[]> {
    return this.http.post(`https://127.0.0.1:8000/api/Garage/Enter/` + car.matrc, { car,Date,Time })
      .pipe(map((res: any) => {
        this.Garage = (res['data']);
        return this.Garage;
      }),
        catchError(this.handleError));
  }
  
  Exit(car: Car,Date:Date,Time:Time): Observable<Garage[]> {
    return this.http.post(`https://127.0.0.1:8000/api/Garage/Exit/` + car.matrc, { car,Date,Time })
      .pipe(map((res: any) => {
        this.Garage = (res['data']);
        return this.Garage;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError(error);
  }

}
