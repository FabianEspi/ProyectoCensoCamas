import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';



import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  


  usuario: UsuarioModel = new UsuarioModel();

  

  constructor(private router: Router, private auth:AuthService) { 



    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {



   


  }



  login(form:NgForm){
   
    if( form.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese el Usuario y contraseña correctos',
        
      })
      
      return ;

    }


    
    this.router.navigateByUrl('/camas/inicio');
    return this.auth.login(this.usuario);
    



      
    


  }


  

  logout(){

    
    this.auth.logout();
  }




  
}
