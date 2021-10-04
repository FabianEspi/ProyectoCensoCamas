import { Component } from '@angular/core';
import { PacientesService } from '../../../services/pacientes/pacientes.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { PacienteModel } from '../../models/paciente.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-egreso',
  templateUrl: './pacientes-egreso.component.html',
  styleUrls: ['./pacientes-egreso.component.css']
})
export class PacientesEgresoComponent {


  paciente: PacienteModel = new PacienteModel();
  pacientes: PacienteModel[];


  valorName: boolean;
  valorIngreso: boolean;
  valorDocumento: boolean;
  buscando: boolean = false;
  noData: boolean = false;
  pacienteSeleccionado: boolean;
  mostrarTabla: boolean = false;


  constructor(private pacientesService: PacientesService, private http: HttpClient, private router: Router) {

    this.pacienteSeleccionado = false;

  }


  liberarPaciente(id: string) {




    Swal.fire({
      icon: 'warning',
      title: '¿Esta Seguro de Seleccionar esta Cama?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {

      if (result.isConfirmed) {
        this.pacientesService.liberarPaciente(id).subscribe(resp => {
          console.log(resp);
          this.router.navigateByUrl("/camas/inicio");

        })

      }

    })

  }













  /* findPacientByName(nombre:string){


    this.buscando = true;
    console.log(nombre);
    
    this.pacientesService.findPacientByName(nombre);
    


  } */

  findPacientByIngreso(ingreso: string) {

    this.buscando = true;
    this.noData = false;
    this.mostrarTabla = false;

    this.pacientesService.findPacientIngresoById(ingreso).subscribe(resp => {

      /* this.paciente.estadoIngreso = resp["estado"];

      if(this.paciente.estadoIngreso === "Cerrado"){

        console.log("error");
        Swal.fire({
          title: 'El paciente Seleccionado se encuentra en estado CERRADO!',
          text: " Ingreso: "+ingreso+ " Documento: "+ resp["paciente"]["documento"] ,
          icon: 'info',
          confirmButtonColor: '#264285',
          confirmButtonText: 'Aceptar'
        });
        this.mostrarTabla = false;
      this.buscando=false;
      this.noData = true;
    



      } else{
 */




      setTimeout(() => {



        this.paciente.documento = resp["documento"];
        this.paciente.id = resp["consecutivo"];
        this.paciente.nombre = resp["paciente"];
        this.paciente.fechaIngreso = resp["fechaIngreso"];
        this.paciente.estadoIngreso = resp["estadoIngreso"];

        this.buscando = false;
        console.log("Patient found correctly");
        this.mostrarTabla = true;


      }, 2000);

      /*  } */


    }, (err) => {

      this.mostrarTabla = false;
      this.buscando = false;
      this.noData = true;


    });



  }

  findPacientByDocument(documento: string) {


    this.buscando = true;
    this.noData = false;
    this.mostrarTabla = false;

    this.pacientesService.findPacientIngresoByDocument(documento).subscribe(resp => {





      setTimeout(() => {




        this.paciente.documento = resp["documento"];
        this.paciente.id = resp["consecutivo"];
        this.paciente.nombre = resp["paciente"];
        this.paciente.fechaIngreso = resp["fechaIngreso"];
        this.paciente.estadoIngreso = resp["estadoIngreso"];
        this.buscando = false;
        console.log("Patient found correctly");
        this.mostrarTabla = true;

      }, 2000);

    }, (err) => {


      this.buscando = false;
      this.noData = true;


    });



  }

  seleccionarPaciente(documento: string, id: string) {

    Swal.fire({
      title: '¿Esta seguro de escoger este paciente?',
      text: " Ingreso: " + id + " Documento: " + documento,
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

        this.pacienteSeleccionado = true;
        this.mostrarTabla = false;
        console.log("Patient selected correctly");
      }
    })


  }



  cancelarpaciente() {

    this.pacienteSeleccionado = false;


  }


  public optionSelectedName(valor: string) {


    if (valor === "nombre") {

      this.valorName = true;
    } else {

      this.valorName = false;
    }

  }

  public optionSelectedDocument(valor: string) {


    if (valor === "identificacion") {

      this.valorDocumento = true;
    } else {

      this.valorDocumento = false;
    }

  }

  public optionSelectedIngreso(valor: string) {


    if (valor === "ingreso") {

      this.valorIngreso = true;
    } else {

      this.valorIngreso = false;
    }

  }

}
