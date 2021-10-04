import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CamasService {

  private urlCamas = 'http://172.16.33.100:8080/camas';
  private urlGrupos = 'http://172.16.33.100:8080/grupo';
  private urlSubrupos = 'http://172.16.33.100:8080/subgrupo';
  private urlTipoCama = 'http://172.16.33.100:8080/tipocama';
  private urlIngreso = 'http://172.16.33.100:8080/ingreso'

  constructor(private http: HttpClient) { }

  findCamaGrupoSubgrupoTipo(grupo: string, subgrupo: string, tipo: string) {

    return this.http.get(`${this.urlCamas}/find/grupo=${grupo}/subgrupo=${subgrupo}/tipo=${tipo}`);

  }

  findCamaGrupoSubgrupo(grupo: string, subgrupo: string) {


    return this.http.get(`${this.urlCamas}/find/grupo=${grupo}/subgrupo=${subgrupo}`);

  }

  findAllGrupos() {

    return this.http.get(`${this.urlGrupos}/all`);
  }

  findGrupoWithNombre(nombre: string) {

    return this.http.get(`${this.urlGrupos}/find/nombre=${nombre}`);


  }

  findSubgrupoWithGrupoOID(grupo: string) {

    return this.http.get(`${this.urlSubrupos}/find/grupo=${grupo}`);

  }

  findAllTipodeCama() {

    return this.http.get(`${this.urlTipoCama}/all`);
  }


  findOIDTipoCamaWithName(nameTipo: string) {


    return this.http.get(`${this.urlTipoCama}/find/nombre=${nameTipo}`);

  }

  findTiposCamasWithGrupoSubgrupo(grupo: string, subgrupo: string) {


    return this.http.get(`${this.urlTipoCama}/find/grupo=${grupo}&subgrupo=${subgrupo}`);
  }


  trasladoPaciente(ingreso: string, codigoCama: string) {


    return this.http.put(`${this.urlIngreso}/update/ingreso=${ingreso}/cama=${codigoCama}`, null);
  }


}

