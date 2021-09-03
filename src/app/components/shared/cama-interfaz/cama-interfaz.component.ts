
import { Component, OnInit } from '@angular/core';

import { CamasService } from '../../../services/camas/camas.service';


@Component({
  selector: 'app-cama-interfaz',
  templateUrl: './cama-interfaz.component.html',
  styleUrls: ['./cama-interfaz.component.css']
})
export class CamaInterfazComponent implements OnInit {

  cargando:boolean= false;
  nodata:boolean = false;
  tipoCama;

  

  //GRUPOS
  grupitos=[];
  grupos={};
  //SUBGRUPOS
  subgrupo={} ;
  subgrupitos = [];
  
  //TIPOSDECAMA
  tipo={};
  tipito=[];

  //CAMAS
  camas = {};
  camitas = [];
  estados = []

  
  constructor(private camasService:CamasService) {

    

   }


  
  

  ngOnInit(): void {
  }


  findCamaGrupoSubgrupoTipo(grupo:number,subgrupo:number,tipo?:number){


    this.camasService.findCamaGrupoSubgrupoTipo(grupo,subgrupo,tipo).subscribe(resp => {

      
      this.tipoCama = tipo;
      this.camas = resp;
      let valorPrueba = Object.keys(this.camas).length;
      console.log(this.camas);

      if(this.camitas.length === 0){

        this.cargando = true;
        setTimeout(() => {


          for (let index = 0; valorPrueba; index++) {
            this.camitas.push( this.camas[index]);
            this.estados.push(this.camas[index].estadoCama);
            let source = {URL:'URL ESTADO 2'}
            Object.assign(this.camitas[index],source)
            this.cargando=false;
          }

          console.log(this.camitas);
          
        }, 1000);

      


        
        
        

      }
      



      

      

    },(err)=>{

     


    });


  }


  findAllTipodeCama(){


    return this.camasService.findAllTipodeCama().subscribe(resp =>{


      this.tipo = resp;
      let valor = Object.keys(this.tipo).length;
      if(this.tipito.length === 0){

        for (let index = 0; valor; index++) {
          this.tipito.push( this.tipo[index].nombre);
        }
        

      }

    })
  }

  findAllCamas(){

    this.camasService.findAllGrupos().subscribe(resp =>{

      

     

        this.grupos=resp;
      let valor = Object.keys(this.grupos).length;
      
      if(this.grupitos.length === 0){

      

          for (let index = 0; valor; index++) {
            this.grupitos.push( this.grupos[index].nombre);
          }

    }

  },(err)=>{

    console.log("Error en el servicio de encontrar todos los grupos");

  });

 }

 findSubgrupoWithGrupo(grupo:string){

  this.camasService.findGrupoWithNombre(grupo).subscribe(resp=>{

    
    let oidSubgrupo =resp["id"]

    this.camasService.findSubgrupoWithGrupoOID(oidSubgrupo).subscribe(resp =>{

      this.subgrupo = resp;
      let valor = Object.keys(this.subgrupo).length
      console.log(valor);
      
      

      
  

      
  
      if(this.subgrupitos.length === 0 && valor!= 0){

        for (let index = 0; index < valor; index++) {
          this.subgrupitos.push( this.subgrupo[index]);
        }

        
     } 

    

     if( valor === 0){

      if(this.subgrupitos.length === 0 ){
      
      this.subgrupitos.push("No hay subgrupos");

       


      }

      
      

     }


    
  },(err)=>{
    console.log("Error en el servicio de encontrar  los subgrupos");
  });
  });
}





 

}
