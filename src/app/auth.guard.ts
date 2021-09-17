import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[] | undefined; route: ActivatedRouteSnapshot | undefined;
  
  constructor(
    private router: Router,
    private authenticateService: AuthService){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authenticateService.isLoggedIn()==true){
        return true;
      }
      else
      {
        this.router.navigate(['']);
        return false;  
      }
  }
  
}
