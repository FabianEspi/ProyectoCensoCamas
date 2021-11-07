import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
import { NuevoUsuario } from '../../models/nuevo-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isLogged = false;
  nuevoUsuario: NuevoUsuario;
  usuario: string;
  clave: string;
  nombre: string;
  email: string;
  rol: string;
  roles: string[] = [];
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.tokenService.getToken()) {

      this.isLogged = true;

    }
  }

  onRegister(): void {

    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.usuario, this.clave);
    console.log("entro");


    Swal.fire({
      title: 'Cuenta Creada Correctamente',
      icon: 'success',

      confirmButtonColor: '#264285',
      confirmButtonText: 'Aceptar'
    })
    this.router.navigateByUrl("/camas/inicio");
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        console.log(data);

        Swal.fire({
          title: 'Cuenta Creada Correctamente',
          icon: 'success',

          confirmButtonColor: '#264285',
          confirmButtonText: 'Aceptar'
        })
        this.router.navigate(["/login"]);

      }
    ),
      err => {
        Swal.fire({
          title: 'Error al crear la cuenta',
          icon: 'error',

          confirmButtonColor: '#264285',
          confirmButtonText: 'Aceptar'
        })

        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
  }
}
