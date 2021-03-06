
import { Component, Input } from '@angular/core';

import { CamasService } from '../../../services/camas/camas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cama-interfaz',
  templateUrl: './cama-interfaz.component.html',
  styleUrls: ['./cama-interfaz.component.css']
})
export class CamaInterfazComponent {

  @Input() paciente: {};

  cargando: boolean = false;
  nodata: boolean = false;
  tipoCama;
  grupoOnchange: string;
  subgrupoOnchange: string;
  tipoOnchange: string;


  //GRUPOS
  grupitos = [];
  grupos = {};
  //SUBGRUPOS
  subgrupo = {};
  subgrupitos = [];

  //TIPOSDECAMA
  tipo = {};
  tipito = [];

  //CAMAS
  camas = {};
  camitas = [];
  estados = []


  constructor(private camasService: CamasService, private router: Router) { }



  findCamaFiltros(grupo: string, subgrupo: string, tipo: string, estado: string) {


    if (tipo === "defecto" && estado === "defecto") {

      this.findCamaGrupoSubgrupo(grupo, subgrupo);

    }
    if (estado === "defecto") {


      this.findCamaGrupoSubgrupoTipo(grupo, subgrupo, tipo);
    }

    if (grupo != "defecto" && subgrupo != "defecto" && tipo != "defecto" && estado != "defecto") {

      this.findCamaGrupoSubgrupoTipoEstado(grupo, subgrupo, tipo, estado);

    }
  }





  findCamaGrupoSubgrupo(grupo: string, subgrupo: string) {

    this.cargando = true;
    this.camitas = [];

    this.camasService.findCamaGrupoSubgrupo(grupo, subgrupo).subscribe(resp => {

      console.log(resp);
      this.camas = resp;
      let valorPrueba = Object.keys(this.camas).length;

      if (valorPrueba === 0) {
        setTimeout(() => {
          this.cargando = false;
          this.nodata = true;
        }, 1000);
      }

      if (this.tipoOnchange === subgrupo) {
        setTimeout(() => {
          for (let index = 0; index < valorPrueba; index++) {
            this.camitas.push(this.camas[index]);
            this.estados.push(this.camas[index].estadoCama);
            let source;
            switch (this.camas[index]["estado"]) {
              case "Bloqueada":
                source = { URL: '../../../../assets/img/bloqueada.png' }
                break;

              case "Ocupada":
                source = { URL: '../../../../assets/img/ocupada.png' }
                break;

              case "Desocupada":
                source = { URL: '../../../../assets/img/disponible.png' }
                break;

              default:
                break;
            }
            Object.assign(this.camitas[index], source)
            this.cargando = false;
            this.nodata = false;
          }
        }, 1000);
        this.subgrupoOnchange = subgrupo;

      }

      if (this.camitas.length === 0) {

        setTimeout(() => {
          for (let index = 0; index < valorPrueba; index++) {
            this.camitas.push(this.camas[index]);
            this.estados.push(this.camas[index].estadoCama);
            let source;
            switch (this.camas[index]["estado"]) {
              case "Bloqueada":
                source = { URL: '../../../../assets/img/bloqueada.png' }
                break;

              case "Ocupada":
                source = { URL: '../../../../assets/img/ocupada.png' }
                break;

              case "Desocupada":
                source = { URL: '../../../../assets/img/disponible.png' }
                break;

              default:
                break;
            }
            Object.assign(this.camitas[index], source)
            this.cargando = false;
            this.nodata = false;
          }

          this.subgrupoOnchange = subgrupo;
        }, 1000);

        this.subgrupoOnchange = subgrupo;

      }



    });




  }


  findCamaGrupoSubgrupoTipoEstado(grupo: string, subgrupo: string, tipo: string, estado: string) {

    this.cargando = true;
    this.camitas = [];

    this.camasService.findCamaGrupoSubgrupoTipoEstado(grupo, subgrupo, tipo, estado).subscribe(resp => {
      console.log(resp);
      this.camas = resp;
      let valorPrueba = Object.keys(this.camas).length;

      if (valorPrueba === 0 && tipo != "defecto") {
        setTimeout(() => {
          this.cargando = false;
          this.nodata = true;
        }, 1000);
      }

      if (this.tipoOnchange === subgrupo && tipo != "defecto") {
        setTimeout(() => {
          for (let index = 0; index < valorPrueba; index++) {
            this.camitas.push(this.camas[index]);
            this.estados.push(this.camas[index].estadoCama);
            let source;
            switch (this.camas[index]["estado"]) {
              case "Bloqueada":
                source = { URL: '../../../../assets/img/bloqueada.png' }
                break;

              case "Ocupada":
                source = { URL: '../../../../assets/img/ocupada.png' }
                break;

              case "Desocupada":
                source = { URL: '../../../../assets/img/disponible.png' }
                break;

              default:
                break;
            }
            Object.assign(this.camitas[index], source)
            this.cargando = false;
            this.nodata = false;
          }
        }, 1000);
        this.tipoOnchange = tipo;
        this.subgrupoOnchange = subgrupo;

      }

      if (this.camitas.length === 0 && tipo != "defecto") {

        setTimeout(() => {
          for (let index = 0; index < valorPrueba; index++) {
            this.camitas.push(this.camas[index]);
            this.estados.push(this.camas[index].estadoCama);
            let source;
            switch (this.camas[index]["estado"]) {
              case "Bloqueada":
                source = { URL: '../../../../assets/img/bloqueada.png' }
                break;

              case "Ocupada":
                source = { URL: '../../../../assets/img/ocupada.png' }
                break;

              case "Desocupada":
                source = { URL: '../../../../assets/img/disponible.png' }
                break;

              default:
                break;
            }
            Object.assign(this.camitas[index], source)
            this.cargando = false;
            this.nodata = false;
          }
          this.tipoOnchange = tipo;
          this.subgrupoOnchange = subgrupo;
        }, 1000);
        this.tipoOnchange = tipo;
        this.subgrupoOnchange = subgrupo;

      }



    });


  }


  findCamaGrupoSubgrupoTipo(grupo: string, subgrupo: string, tipo: string) {

    this.cargando = true;
    this.camitas = [];
    this.camasService.findCamaGrupoSubgrupoTipo(grupo, subgrupo, tipo).subscribe(resp => {
      this.camas = resp;
      let valorPrueba = Object.keys(this.camas).length;

      if (valorPrueba === 0 && tipo != "defecto") {
        setTimeout(() => {
          this.cargando = false;
          this.nodata = true;
        }, 1000);
      }

      if (this.tipoOnchange === subgrupo && tipo != "defecto") {
        setTimeout(() => {
          for (let index = 0; index < valorPrueba; index++) {
            this.camitas.push(this.camas[index]);
            this.estados.push(this.camas[index].estadoCama);
            let source;
            switch (this.camas[index]["estado"]) {
              case "Bloqueada":
                source = { URL: '../../../../assets/img/bloqueada.png' }
                break;

              case "Ocupada":
                source = { URL: '../../../../assets/img/ocupada.png' }
                break;

              case "Desocupada":
                source = { URL: '../../../../assets/img/disponible.png' }
                break;

              default:
                break;
            }
            Object.assign(this.camitas[index], source)
            this.cargando = false;
          }
        }, 1000);
        this.tipoOnchange = tipo;
        this.subgrupoOnchange = subgrupo;

      }

      if (this.camitas.length === 0 && tipo != "defecto") {

        setTimeout(() => {
          for (let index = 0; index < valorPrueba; index++) {
            this.camitas.push(this.camas[index]);
            this.estados.push(this.camas[index].estadoCama);
            let source;
            switch (this.camas[index]["estado"]) {
              case "Bloqueada":
                source = { URL: '../../../../assets/img/bloqueada.png' }
                break;

              case "Ocupada":
                source = { URL: '../../../../assets/img/ocupada.png' }
                break;

              case "Desocupada":
                source = { URL: '../../../../assets/img/disponible.png' }
                break;

              default:
                break;
            }
            Object.assign(this.camitas[index], source)
            this.cargando = false;
          }
          this.tipoOnchange = tipo;
          this.subgrupoOnchange = subgrupo;
        }, 1000);
        this.tipoOnchange = tipo;
        this.subgrupoOnchange = subgrupo;

      }
    });


  }

  findTiposCamasWithGrupoSubgrupo(grupo: string, subgrupo: string) {

    return this.camasService.findTiposCamasWithGrupoSubgrupo(grupo, subgrupo).subscribe(resp => {
      this.tipo = resp;
      let valor = Object.keys(this.tipo).length;

      if (this.subgrupoOnchange === grupo) {
        this.tipito = [];
        for (let index = 0; index < valor; index++) {
          this.tipito.push(this.tipo[index]);
        }
        this.subgrupoOnchange = subgrupo;
      }


      if (this.tipito.length === 0 && valor != 0) {
        for (let index = 0; index < valor; index++) {
          this.tipito.push(this.tipo[index]);
        }
        this.subgrupoOnchange = subgrupo;
      }

      if (valor === 0) {
        if (this.tipito.length === 0) {
          this.tipito.push("No hay Tipos");
        }
      }
      this.subgrupoOnchange = grupo;
    });
  }



  findAllCamas() {

    this.camasService.findAllGrupos().subscribe(resp => {
      this.grupos = resp;
      let valor = Object.keys(this.grupos).length;
      if (this.grupitos.length === 0) {
        for (let index = 0; index < valor; index++) {
          this.grupitos.push(this.grupos[index]);
        }
      }
    }, (err) => {
      console.log("Error en el servicio de encontrar todos los grupos");
    });

  }

  findSubgrupoWithGrupo(grupo: string) {

    this.camasService.findSubgrupoWithGrupoOID(grupo).subscribe(resp => {
      this.subgrupo = resp;
      let valor = Object.keys(this.subgrupo).length

      if (this.grupoOnchange === grupo) {
        this.subgrupitos = [];
        for (let index = 0; index < valor; index++) {
          this.subgrupitos.push(this.subgrupo[index]);
        }
        this.grupoOnchange = grupo;
      }

      if ((this.subgrupitos.length === 0 && valor != 0)) {
        for (let index = 0; index < valor; index++) {
          this.subgrupitos.push(this.subgrupo[index]);
        }
        this.grupoOnchange = grupo;
      }


      if (valor === 0) {
        if (this.subgrupitos.length === 0) {
          this.subgrupitos.push("No hay subgrupos");
        }
      }
      this.grupoOnchange = grupo;
    }, (err) => {
      console.log("Error en el servicio de encontrar  los subgrupos");
    });

  }


  seleccionarCama(camas) {

    if (camas.estado === 'Desocupada') {

      Swal.fire({
        icon: 'info',
        title: 'CAMA ' + camas.codigo,
        html:
          '<b>ESTADO CAMA: </b>' + camas.estado + '<br><b>GRUPO:</b> ' + camas.grupo + '<br><b>SUBGRUPO:</b> ' + camas.subgrupo + '<br><b>TIPO:</b> ' + camas.tipocama,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {

        if (result.isConfirmed) {
          Swal.fire({
            icon: 'warning',
            title: '??Esta Seguro de Seleccionar esta Cama?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          }).then((result) => {

            if (result.isConfirmed) {
              this.camasService.trasladoPaciente(this.paciente["id"], camas.codigo).subscribe(resp => {
                console.log(resp);
              })
              Swal.fire({
                icon: 'success',
                title: '??Se ha trasladado Satisfactoriamente!'
              })
              this.router.navigateByUrl("/camas/inicio");
            }
          })
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'CAMA ' + camas.codigo,
        html:
          '<b><h5>No se puede seleccionar cama por su estado </h5></b>' + '<br><b>ESTADO CAMA: </b>' + camas.estado + '<br><b>PACIENTE:</b> ' + camas.paciente + '<br><b>DOCUMENTO: </b> ' + camas.documento + '<br><b>GRUPO:</b> ' + camas.grupo + '<br><b>SUBGRUPO:</b> ' + camas.subgrupo,

      })
    }
  }

}
