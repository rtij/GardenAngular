import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Client } from '../Object/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }
  clients!: Client[];
  
  getAll(): Observable<Client[]> {
    return this.http.get(`https://127.0.0.1:8000/api/client/liste`).pipe(
      map((res: any) => {
        this.clients = res['data'];
        return this.clients;
      }),
      catchError(this.handleError));
  }

  store(client: Client): Observable<Client[]> {
    return this.http.post(`https://127.0.0.1:8000/api/client/addClient`, { data: client })
      .pipe(map((res: any) => {
        this.clients = (res['data']);
        return this.clients;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError(error);
  }

  update(client: Client): Observable<Client[]> {
    return this.http.put(`https://127.0.0.1:8000/api/client/EditClient/` + client.idclient, { data: client })
      .pipe(map((res: any) => {
        this.clients = (res['data']);
        return this.clients;
      }),
        catchError(this.handleError));
  }

}
