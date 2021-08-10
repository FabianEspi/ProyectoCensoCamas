import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/components/models/usuario.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = '';

  constructor(private http:HttpClient) {

   }


   login(usuario:UsuarioModel){

    this.http.get(`${this.url}/encontrar/documento/${usuario}`);
   }

  }

