import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url = 'http://172.16.33.100:8080/pacientes'

  constructor(private http: HttpClient) { }


  

  findPacientByIngreso(ingreso:string) {

    
    
    return this.http.get(`${this.url}/find/${ingreso}`);

    

  }

  findPacientByDocument(documento:string) {


    return this.http.get(`${this.url}/encontrar/documento/${documento}`);

  }

 /*  findPacientByName(nombre:String ) {

    this.http.get(`${this.url}/encontrar/documento/${nombre}`)

  } */

 





}

