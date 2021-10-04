import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { APP_ROUTING } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUsuarioComponent } from './components/user/login-usuario/login-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TrasladoComponent } from './components/camas/traslado/traslado.component';
import { EgresoComponent } from './components/camas/egreso/egreso.component';
import { CensoComponent } from './components/camas/censo/censo.component';

import { InicioCamasComponent } from './components/camas/inicio/inicio.component';
import { PacientesComponent } from './components/shared/pacientes/pacientes.component';
import { NavbarLoginComponent } from './components/shared/navbar-login/navbar-login.component';

import { CamasComponent } from './components/camas/camas/camas.component';
import { CamaInterfazComponent } from './components/shared/cama-interfaz/cama-interfaz.component';
import { PacientesEgresoComponent } from './components/shared/pacientes-egreso/pacientes-egreso.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    LoginUsuarioComponent,
    InicioComponent,
    QuienesSomosComponent,
    FooterComponent,
    TrasladoComponent,
    EgresoComponent,
    CensoComponent,
    CamasComponent,
    InicioCamasComponent,
    PacientesComponent,
    NavbarLoginComponent,
    CamasComponent,
    CamaInterfazComponent,
    PacientesEgresoComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
