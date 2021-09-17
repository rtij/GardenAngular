import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Car } from './Object/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  Cars!: Car[];

  getAll(): Observable<Car[]> {
    return this.http.get(`https://127.0.0.1:8000/api/cars/liste`).pipe(
      map((res: any) => {
        this.Cars = res['data'];
        return this.Cars;
      }),
      catchError(this.handleError));
  }

  
  store(Car: Car): Observable<Car[]> {
    return this.http.post(`https://127.0.0.1:8000/api/Car/addCar`, { data: Car })
      .pipe(map((res: any) => {
        this.Cars = (res['data']);
        return this.Cars;
      }),
        catchError(this.handleError));
  }

  update(Car: Car): Observable<Car[]> {
    return this.http.put(`https://127.0.0.1:8000/api/Car/updateCar/`+ Car.matrc, { data: Car })
      .pipe(map((res: any) => {
        this.Cars = (res['data']);
        return this.Cars;
      }),
        catchError(this.handleError));
  }
  
  delete(Car: Car): Observable<Car[]> {
    return this.http.put(`https://127.0.0.1:8000/api/Car/deleteCar/`+ Car.matrc, { data: Car })
      .pipe(map((res: any) => {
        this.Cars = (res['data']);
        return this.Cars;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError(error);
  }
}
