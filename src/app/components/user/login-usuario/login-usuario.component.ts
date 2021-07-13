import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  public estaAutenticado:boolean;

  constructor(private router: Router, private auth: AuthServiceService) { 


    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {



   


  }


  onSubmit(form:NgForm){


    if(form.invalid){
      return;
    }

    console.log('Formulario enviado');
    console.log(this.usuario);
    console.log(form);
  }


  login(form:NgForm){

    if(form.invalid){
      return;
    }

   this.router.navigateByUrl('/camas/inicio')
    

    


  }

  
}
