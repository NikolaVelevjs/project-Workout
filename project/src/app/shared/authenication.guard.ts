import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenicationService } from './authenication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationGuard implements CanActivate {
  constructor(private auth:AuthenicationService, private router: Router){}
  canActivate(){
    if(this.auth.isLoggedIn()){
      return true
    }
    alert("You have not logged in")
    this.router.navigateByUrl('/login')
    return false
  }  
}
