import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/components/models/usuario.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public autenticado:boolean;
  url = '';

  constructor(private http:HttpClient, private router:Router) {

   }


  public login(usuario:UsuarioModel){


    
    this.http.get(`${this.url}/encontrar/documento/${usuario}`);
    return this.autenticado = true;
   }

   


  estaAutenticado():boolean{


      return this.autenticado;
    
  }

  public logout(){

    
    console.log("logout");
    this.router.navigateByUrl('/inicio/home')
    return this.autenticado = false;
  }

  }

