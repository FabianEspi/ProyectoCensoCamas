import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../components/models/nuevo-usuario';
import { Observable } from 'rxjs';
import { JwtDTO } from '../components/models/jwt-dto';
import { LoginUsuario } from '../components/models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://172.16.33.100:8080/auth/'

  constructor(private HttpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {

    return this.HttpClient.post<any>(this.authURL + 'singup', nuevoUsuario)
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {

    return this.HttpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario)
  }
}
