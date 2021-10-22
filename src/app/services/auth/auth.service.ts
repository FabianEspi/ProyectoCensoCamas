import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/components/models/usuario.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public autenticado: boolean;
  url = 'http://172.16.33.100:8080/usuarios';

  constructor(private http: HttpClient, private router: Router) {

  }

  public login(username: string) {
    this.autenticado = true;
    this.router.navigateByUrl('/camas/inicio')
    return this.http.get(`${this.url}/find/${username}`);
  }

  estaAutenticado(): boolean {
    return this.autenticado;
  }

  public logout() {
    console.log("logout");
    this.router.navigateByUrl('/inicio/home')
    return this.autenticado = false;
  }

}

