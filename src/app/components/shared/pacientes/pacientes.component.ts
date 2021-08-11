import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../../services/pacientes/pacientes.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {


 

  valorName:boolean;
  valorIngreso: boolean;
  valorDocumento:boolean;
  buscando:boolean = false;
  noData:boolean = false;
  pacienteSeleccionado:boolean = false;

  constructor(private pacientesService:PacientesService, private http:HttpClient) { }



  

  
  

 
  findPacientByName(nombre:string){


    this.buscando = true;
    console.log(nombre);
    
    this.pacientesService.findPacientByName(nombre);
    


  }

  findPacientByIngreso(ingreso:String ) {

    this.buscando = true;
    this.pacientesService.findPacientByIngreso(ingreso);
    

  }

  findPacientByDocument(documento:String ) {


    this.buscando = true;
    console.log(documento);
    this.pacientesService.findPacientByDocument(documento);
    


  }

  seleccionarPaciente(documento:string, id:string){

    Swal.fire({
      title: 'Esta Seguro de escoger el paciente?',
      text: "id: "+id+ " documento: "+documento ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#264285',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Correcto',
          'El paciente ha sido seleccionado',
          'success'
        )
        console.log("Hola"+ documento+ id);
        this.pacienteSeleccionado= true;
      }
    })

    
  }

  public optionSelectedName(valor:string){
  

    if(valor==="nombre"){

      this.valorName = true;
    } else{

      this.valorName = false;
    }
   
  }

  public optionSelectedDocument(valor:string){
  

    if(valor==="identificacion"){

      this.valorDocumento = true;
    } else{

      this.valorDocumento = false;
    }
   
  }

  public optionSelectedIngreso(valor:string){
    

    if(valor==="ingreso"){

      this.valorIngreso = true;
    } else{

      this.valorIngreso = false;
    }
   
  }

  public actualizarCama(paciente:string, cama:string){

    return this.http


  }

  

}
