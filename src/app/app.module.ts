import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { APP_ROUTING } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginUsuarioComponent } from './components/user/login-usuario/login-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    LoginUsuarioComponent,
    InicioComponent,
    QuienesSomosComponent,
    ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
