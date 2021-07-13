import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../components/models/usuario.models';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url = 'http://localhost:8080/usuarios';
  

  constructor(private http: HttpClient) { }

  login(usuario: UsuarioModel):Observable<UsuarioModel>{

    const authData = {

      ...usuario
    }

    return this.http.post<UsuarioModel>(`${this.url}/login`,authData)
  }

  

  
}
