import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate2(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canActivate(): Promise<boolean>{
    return new Promise(resolve =>{
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user){
          this.router.navigate(['/home']);
          //window.location.href = '/home';
        }
        resolve(!user ? true: false);
      });
    });
  }

}
