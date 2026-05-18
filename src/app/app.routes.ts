import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { RecursosHidricos } from './pages/recursos-hidricos/recursos-hidricos';
import { Home } from './pages/home/home';
import { Amenazas } from './pages/amenazas/amenazas';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'recursosHidricos', component:RecursosHidricos},
    {path:'ventas', component:Ventas},
    {path:'amenazas', component:Amenazas},
    {path:'**', redirectTo:''}

];
