import { Component } from '@angular/core';
import { PacientesService } from '../../../services/pacientes/pacientes.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { PacienteModel } from '../../models/paciente.models';
import { Router } from '@angular/router';





@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {



  paciente: PacienteModel = new PacienteModel();
  pacienteSelec: PacienteModel = new PacienteModel();
  pacientes: PacienteModel[];


  valorName: boolean;
  valorIngreso: boolean;
  valorDocumento: boolean;
  buscando: boolean = false;
  noData: boolean = false;
  pacienteSeleccionado: boolean;
  mostrarTabla: boolean = false;
  mostrarTablaDocumento: boolean = false;

  prueba = {};


  constructor(private pacientesService: PacientesService, private http: HttpClient, private router: Router) {

    this.pacienteSeleccionado = false;

  }

  findPacientByName(nombre: string) {

    this.buscando = true;
    this.noData = false;
    this.mostrarTabla = false;
    this.mostrarTablaDocumento = false;
    this.prueba = [];


    this.pacientesService.findPacientIngresoByName(nombre).subscribe(resp => {

      this.prueba = [];
      this.prueba = resp;
      console.log(resp);

      setTimeout(() => {

        if (resp[0]["estado"] === 'Registrado') {
          this.paciente.documento = resp["documento"];
          this.paciente.id = resp["consecutivo"];
          this.paciente.nombre = resp["paciente"];
          this.paciente.fechaIngreso = resp["fechaIngreso"];
          this.paciente.estadoIngreso = resp["estado"];
          this.buscando = false;
          this.mostrarTablaDocumento = true;
        } else {

          Swal.fire({
            icon: 'error',
            title: `El paciente seleccionado se encuentra en un estado Incorrecto (ESTADO: ${resp["estadoIngreso"]} ) `,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.buscando = false;
        }
      }, 2000);
    }, (err) => {
      this.buscando = false;
      this.noData = true;
    });





  }

  findPacientByIngreso(ingreso: string) {

    this.buscando = true;
    this.noData = false;
    this.mostrarTabla = false;
    this.mostrarTablaDocumento = false;

    this.pacientesService.findPacientIngresoById(ingreso).subscribe(resp => {

      console.log(resp);

      setTimeout(() => {

        if (resp["estado"] === 'Registrado') {
          this.paciente.documento = resp["documento"];
          this.paciente.id = resp["consecutivo"];
          this.paciente.nombre = resp["paciente"];
          this.paciente.fechaIngreso = resp["fechaIngreso"];
          this.paciente.estadoIngreso = resp["estado"];
          this.buscando = false;
          this.mostrarTabla = true;
        } else {

          Swal.fire({
            icon: 'error',
            title: `El paciente seleccionado se encuentra en un estado Incorrecto (ESTADO: ${resp["estadoIngreso"]} ) `,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.buscando = false;
        }
      }, 2000);
    }, (err) => {
      this.mostrarTabla = false;
      this.buscando = false;
      this.noData = true;
    });
  }



  findPacientByDocument(documento: string) {
    this.buscando = true;
    this.noData = false;
    this.mostrarTablaDocumento = false;
    this.mostrarTabla = false;
    this.prueba = [];

    this.pacientesService.findPacientIngresoByDocument(documento).subscribe(resp => {

      this.prueba = [];
      this.prueba = resp;
      console.log(resp);

      setTimeout(() => {

        if (resp[0]["estado"] === 'Registrado') {
          this.paciente.documento = resp["documento"];
          this.paciente.id = resp["consecutivo"];
          this.paciente.nombre = resp["paciente"];
          this.paciente.fechaIngreso = resp["fechaIngreso"];
          this.paciente.estadoIngreso = resp["estado"];
          this.buscando = false;
          this.mostrarTablaDocumento = true;
        } else {

          Swal.fire({
            icon: 'error',
            title: `El paciente seleccionado se encuentra en un estado Incorrecto (ESTADO: ${resp["estadoIngreso"]} ) `,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.buscando = false;
        }
      }, 2000);
    }, (err) => {
      this.buscando = false;
      this.noData = true;
    });
  }

  seleccionarPaciente(nombre: string, documento: string, id: string, fechaIngreso: string, estadoIngreso: string) {

    Swal.fire({
      title: '¿Esta seguro de escoger este paciente?',
      html: '<b>PACIENTE: </b>' + nombre + '<br><b>INGRESO:</b> ' + id + '<b> DOCUMENTO:</b> ' + documento,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#264285',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.paciente.documento = documento;
        this.paciente.id = id;
        this.paciente.nombre = nombre;
        this.paciente.fechaIngreso = fechaIngreso;
        this.paciente.estadoIngreso = estadoIngreso;

        Swal.fire(
          'Correcto',
          'El paciente ha sido seleccionado',
          'success'
        )

        this.pacienteSeleccionado = true;
        this.mostrarTabla = false;
        this.mostrarTablaDocumento = false;
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
