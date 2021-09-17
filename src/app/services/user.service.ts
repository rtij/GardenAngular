import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../Object/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response!: string;
  user!: User;
  UserListe!: User[];
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  GetAll(): Observable<User[]> {
    return this.http.get(`https://127.0.0.1:8000/login/users/liste`)
      .pipe(map((res: any) => {
        this.UserListe = (res['data']);
        return this.UserListe;
      }),
        catchError(this.handleError));
  }

  Registration(User: User) {
    return this.http.post(`https://127.0.0.1:8000/login/SignIn`, { User })
      .pipe(map((res: any) => {
        this.response = (res['data']);
        return this.response;
      }),
        catchError(this.handleError));
  }
  
  AddUser(User: User) {
    return this.http.post(`https://127.0.0.1:8000/api/users/addUser`, { User })
      .pipe(map((res: any) => {
        this.UserListe = (res['data']);
        return this.UserListe;
      }),
        catchError(this.handleError));
  }

  EditUser(user: User) {
    return this.http.put(`https://127.0.0.1:8000/api/users/editUser/` + user.emailu, { User })
      .pipe(map((res: any) => {
        this.UserListe = (res['data']);
        return this.UserListe;
      }),
        catchError(this.handleError));
  }

  DeleteUser(User: User) {
    return this.http.post(`https://127.0.0.1:8000/api/user/removeUser/` + User.emailu, { User })
      .pipe(map((res: any) => {
        this.UserListe = (res['data']);
        return this.UserListe;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError(error);
  }

}
