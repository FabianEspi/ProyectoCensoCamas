import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url = ''

  constructor(private http: HttpClient) { }


  

  findPacientByIngreso(ingreso:String ) {

    this.http.get(`${this.url}/encontrar/ingreso/${ingreso}`)

  }

  findPacientByDocument(documento:String ) {

    this.http.get(`${this.url}/encontrar/ingreso/${documento}`)

  }

  findPacientByName(nombre:String ) {

    this.http.get(`${this.url}/encontrar/documento/${nombre}`)

  }

  public actualizarCama(paciente:string, cama:string){

    


  }






}
