import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../components/models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url = '';

  constructor(private http: HttpClient) { }

  login(usuario: UsuarioModel){

    const authData = {

      ...usuario,
    }

  }
}
