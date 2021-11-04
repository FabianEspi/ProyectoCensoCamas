import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent {

  constructor(private auth: AuthService, private tokenService: TokenService, private router: Router) { }



  logout(): void {
    this.tokenService.logOut();
    this.router.navigateByUrl("/inicio/home")

  }

}
