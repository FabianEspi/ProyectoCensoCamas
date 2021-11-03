import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

import { LoginUsuarioComponent } from './components/user/login-usuario/login-usuario.component';
import { CamasComponent } from './components/camas/camas/camas.component';
import { TrasladoComponent } from './components/camas/traslado/traslado.component';
import { EgresoComponent } from './components/camas/egreso/egreso.component';
import { CensoComponent } from './components/camas/censo/censo.component';
import { InicioCamasComponent } from './components/camas/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';



const APP_ROUTES: Routes = [


    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    {
        path: 'inicio', component: InicioComponent, children: [

            { path: 'home', component: HomeComponent },
            { path: 'quienesSomos', component: QuienesSomosComponent }

        ]
    },
    {
        path: 'camas', component: CamasComponent, children: [

            { path: 'inicio', component: InicioCamasComponent },
            { path: 'traslado', component: TrasladoComponent },
            { path: 'egreso', component: EgresoComponent },
            { path: 'censo', component: CensoComponent }

        ]
    },

    { path: '**', redirectTo: 'inicio/home' },
    { path: '', pathMatch: 'full', redirectTo: 'inicio/home' },



];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
