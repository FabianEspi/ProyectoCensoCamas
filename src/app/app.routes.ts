import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

import { LoginUsuarioComponent } from './components/user/login-usuario/login-usuario.component';


const APP_ROUTES: Routes = [

   
    { path: 'login', component: LoginUsuarioComponent },
    { path: 'inicio', component: InicioComponent, children:[

        { path: 'home', component: HomeComponent },
        { path: 'quienesSomos', component: QuienesSomosComponent }
    



    ] },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }



];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
