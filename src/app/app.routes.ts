import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PruebaComponent } from './components/prueba/prueba.component';

const APP_ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'prueba', component: PruebaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }



];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
