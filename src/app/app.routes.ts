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
import { ProductosDashboard } from './pages/productos-dashboard/productos-dashboard';
import { ComprasProductosCreate } from './pages/compras-productos-create/compras-productos-create';
import { ComprasProductosDelete } from './pages/compras-productos-delete/compras-productos-delete';
import { ComprasProductosEdit } from './pages/compras-productos-edit/compras-productos-edit';
import { CostosCreate } from './pages/costos-create/costos-create';
import { CostosDelete } from './pages/costos-delete/costos-delete';
import { CostosEdit } from './pages/costos-edit/costos-edit';
import { GastosCreate } from './pages/gastos-create/gastos-create';
import { GastosDelete } from './pages/gastos-delete/gastos-delete';
import { GastosEdit } from './pages/gastos-edit/gastos-edit';
import { IngresosCreate } from './pages/ingresos-create/ingresos-create';
import { IngresosDelete } from './pages/ingresos-delete/ingresos-delete';
import { IngresosEdit } from './pages/ingresos-edit/ingresos-edit';
import { LogInForm } from './pages/log-in-form/log-in-form';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'recursosHidricos', component:RecursosHidricos},
    {path:'ventas', component:Ventas},
    {path:'amenazas', component:Amenazas},
    {path:'user-deletion-form', component:UserDeletionForm},
    {path:'user-edition-form', component:UserEditionForm},
    {path:'signIn', component:SignInForm},
    {path:'login', component:LogInForm},
    {path:'ingresarProductos', component:ProductosForm},
    {path:'borrarProductos', component:ProductosDeleteForm},
    {path:'editarProductos', component:ProductosEditForm},
    {path:'productosDashboard', component: ProductosDashboard},
    {path:'compras-productos-create', component:ComprasProductosCreate},
    {path:'compras-productos-delete', component:ComprasProductosDelete},
    {path:'compras-productos-edit', component:ComprasProductosEdit},
    {path:'costos-create', component:CostosCreate},
    {path:'costos-delete', component:CostosDelete},
    {path:'costos-edit', component:CostosEdit},
    {path:'gastos-create', component:GastosCreate},
    {path:'gastos-delete', component:GastosDelete},
    {path:'gastos-edit', component:GastosEdit},
    {path:'ingresos-create', component:IngresosCreate},
    {path:'ingresos-delete', component:IngresosDelete},
    {path:'ingresos-edit', component:IngresosEdit},
    {path:'**', redirectTo:''}

];
