import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';



import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  public formSubmitted= false;

  usuario: UsuarioModel = new UsuarioModel();

  

  constructor(private router: Router, private auth:AuthService) { 



    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {



   


  }



  login(form:NgForm){
   
    this.router.navigateByUrl('/camas/inicio');
    return this.auth.login(this.usuario);
    



      
    


  }

  

  estaAutenticado(){

    
  }

  logout(){

    this.router.navigateByUrl('/camas/inicio')
  }




  
}
