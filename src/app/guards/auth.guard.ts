import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}


  canActivate(): boolean {

    if(this.auth.estaAutenticado()){

      return true;
    }
    else{

      this.router.navigateByUrl('/login')
      return false;
    }

   
  }
}
