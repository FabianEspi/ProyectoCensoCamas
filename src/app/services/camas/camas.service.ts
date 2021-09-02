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

  constructor(private http:HttpClient) { }

  findCamaGrupoSubgrupoTipo(grupo:number, subgrupo:number, tipo:number){

    return this.http.get(`${this.urlCamas}/find/grupo=${grupo}/subgrupo=${subgrupo}/tipo=${tipo}`);

  }

  findCamaGrupoSubgrupo(grupo:number, subgrupo:number){


    return this.http.get(`${this.urlCamas}/find/grupo=${grupo}/subgrupo=${subgrupo}`);

  }

  findAllGrupos(){

    return this.http.get(`${this.urlGrupos}/all`);
  }

  findGrupoWithNombre(nombre:string){

    return this.http.get(`${this.urlGrupos}/find/nombre=${nombre}`);


  }

  findSubgrupoWithGrupoOID(grupo:number){

    return this.http.get(`${this.urlSubrupos}/find/grupo=${grupo}`);

  }

  findAllTipodeCama(){

    return this.http.get(`${this.urlTipoCama}/all`);
  }


  findOIDTipoCamaWithName(nameTipo:string){


    return this.http.get(`${this.urlTipoCama}/find/nombre=${nameTipo}`);

  }

  findTiposCamasWithGrupoSubgrupoOID(grupo:number,subgrupo:number){


    return this.http.get(`${this.urlTipoCama}/find/grupo=${grupo}&subgrupo=${subgrupo}`);
  }

  

}
 
