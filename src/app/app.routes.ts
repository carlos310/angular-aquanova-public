import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { RecursosHidricos } from './pages/recursos-hidricos/recursos-hidricos';
import { Home } from './pages/home/home';
import { Amenazas } from './pages/amenazas/amenazas';
import { UserDeletionForm } from './pages/user-deletion-form/user-deletion-form';
import { UserEditionForm } from './pages/user-edition-form/user-edition-form';
import { SignInForm } from './pages/sign-in-form/sign-in-form';
import { ProductosForm } from './pages/productos-form/productos-form';
import { ProductosDeleteForm } from './pages/productos-delete-form/productos-delete-form';
import { ProductosEditForm } from './pages/productos-edit-form/productos-edit-form';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'recursosHidricos', component:RecursosHidricos},
    {path:'ventas', component:Ventas},
    {path:'amenazas', component:Amenazas},
    {path:'user-deletion-form', component:UserDeletionForm},
    {path:'user-edition-form', component:UserEditionForm},
    {path:'signIn', component:SignInForm},
    {path:'ingresarProductos', component:ProductosForm},
    {path:'borrarProductos', component:ProductosDeleteForm},
    {path:'editarProductos', component:ProductosEditForm},
    {path:'**', redirectTo:''}

];
