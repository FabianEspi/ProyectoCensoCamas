import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private router: Router) { }

  ngOnInit(): void {

   


  }

}
