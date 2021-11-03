import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  usuario: string;
  clave: string;
  roles: string[] = [];
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.tokenService.getToken()) {

      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {

    this.loginUsuario = new LoginUsuario(this.usuario, this.clave);
    console.log("funciono");
    /* this.router.navigateByUrl("/camas/inicio") */
    this.authService.login(this.loginUsuario).subscribe(
      data => {

        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigateByUrl("/camas/inicio")


      },
      err => {
        Swal.fire({
          title: 'DATOS INCORRECTOS',
          text: 'Por favor escriba correcto los datos',
          icon: 'error',

          confirmButtonColor: '#264285',
          confirmButtonText: 'Aceptar'
        })
      }
    );
  }

}
