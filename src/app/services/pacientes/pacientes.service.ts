import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private urlPacientes = 'http://172.16.33.100:8080/pacientes';
  private urlIngresos = 'http://172.16.33.100:8080/ingreso';

  constructor(private http: HttpClient) { }


  liberarPaciente(id: string) {


    return this.http.put(`${this.urlIngresos}/update/ingreso=${id}`, null)

  }



  findPacientByIngreso(ingreso: string) {



    return this.http.get(`${this.urlPacientes}/find/${ingreso}`);



  }

  findPacientByDocument(documento: string) {


    return this.http.get(`${this.urlPacientes}/encontrar/documento/${documento}`);

  }

  findPacientIngresoById(ingreso: string) {


    return this.http.get(`${this.urlIngresos}/find/id=${ingreso}`);

  }

  findPacientIngresoByDocument(documento: string) {


    return this.http.get(`${this.urlIngresos}/find/documento=${documento}`);

  }








}

