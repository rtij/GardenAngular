import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: string;
  constructor(private http: HttpClient, private router: Router) {

  }
  response!: string;

  public isLoggedIn(): boolean {
    const ls = localStorage.getItem('token');
    if (ls && ls.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  login(username: string, password: string) {
    return this.http.post(`https://127.0.0.1:8000/login/login`, { username, password })
      .pipe(map((res: any) => {
        this.token = (res['data']);
        return this.token;
      }),
        catchError(this.handleError));
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    location.reload();
  }

  getLogout() {
    return this.http.get(`https://127.0.0.1:8000/login/logout`).pipe(
      map((res: any) => {
        this.response = res;
        return this.response;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError(error);
  }
}
