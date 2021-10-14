import { Component, Input } from '@angular/core';
import { CamasService } from '../../../services/camas/camas.service';
import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';


pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-censo',
  templateUrl: './censo.component.html',
  styleUrls: ['./censo.component.css']
})
export class CensoComponent {


  @Input() paciente: {};


  cargando: boolean = false;
  cargado: boolean = false;

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


  /* Metodo para generar PDF */
  buildTableBody(grupo: string, subgrupo: string, tipo: string) {

    const sourceData = this.camitas

    let bodyData = [];
    const headers = ["CODIGO", "ESTADO", "PACIENTE", "DOCUMENTO", "GRUPO", "SUBGRUPO", "TIPO"]
    bodyData.push(headers);
    sourceData.forEach(function (sourceRow) {

      let dataRow = [];

      dataRow.push(sourceRow.codigo);
      dataRow.push(sourceRow.estado);
      dataRow.push(sourceRow.paciente);
      dataRow.push(sourceRow.documento);
      dataRow.push(sourceRow.grupo);
      dataRow.push(sourceRow.subgrupo);
      dataRow.push(sourceRow.tipocama);

      bodyData.push(dataRow);

    });

    const pdfDefinition: any = {

      content: [
        {

          text: ' REPORTE PDF', fontSize: 25, bold: true, alignment: 'center', lineHeight: 2

        },
        {

          text: 'CENSO DE CAMAS', fontSize: 20, bold: true, lineHeight: 1

        },
        {

          text: ` TIPOS DE FILTRO( GRUPO: ${grupo}, SUBGRUPO: ${subgrupo}, TIPO: ${tipo}) `, fontSize: 10, bold: true, lineHeight: 2

        },
        {
          table: {
            layout: 'lightHorizontalLines',
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: bodyData
          }
        }
      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  /* Encontrar camas por Grupo, Subgrupo y Tipo */

  findCamaGrupoSubgrupoTipo(grupo: string, subgrupo: string, tipo?: string) {

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
      this.cargado = true;
      console.log(this.camas);
    });


  }

  /* Encontrar camas por Grupo, Subgrupo*/

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

  /* Encontrar todas las Camas */

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

  /* Encontrar todas las Camas por Subgrupo */

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

  /* Seleccionar Cama para realizar alguna Acción */

  seleccionarCama(camas) {
    if (camas.estado === 'Desocupada') {
      Swal.fire({
        icon: 'info',
        title: 'CAMA ' + camas.codigo,
        html:
          '<b>ESTADO CAMA: </b>' + camas.estado + '<br><b>GRUPO:</b> ' + camas.grupo + '<br><b>SUBGRUPO:</b> ' + camas.subgrupo + '<br><b>TIPO:</b> ' + camas.tipocama,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      })

    } else {
      Swal.fire({
        icon: 'info',
        title: 'CAMA ' + camas.codigo,
        html:
          '<b>ESTADO CAMA: </b>' + camas.estado + '<br><b>PACIENTE:</b> ' + camas.paciente + '<br><b>DOCUMENTO: </b> ' + camas.documento + '<br><b>GRUPO:</b> ' + camas.grupo + '<br><b>SUBGRUPO:</b> ' + camas.subgrupo + '<br><b>TIPO:</b> ' + camas.tipocama,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      })
    }
  }

}
