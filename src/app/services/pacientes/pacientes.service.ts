import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url = ''

  constructor(private http: HttpClient) { }


  


  findPacientByDocument(documento:String ) {

    this.http.get(`${this.url}/encontrar/documento/${documento}`)

  }

  findPacientById(nombre:String ) {

    this.http.get(`${this.url}/encontrar/documento/${nombre}`)

  }



}
