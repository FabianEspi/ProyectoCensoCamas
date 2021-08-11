import { Component } from '@angular/core';
import { UsuarioModel } from '../../models/paciente.models';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent  {


  Usuario:UsuarioModel = {

    usuario: "fespitia"
  };
  

  constructor(private auth:AuthService) { }

 
  logout(){

    this.auth.logout();

  }

}
