import { Component } from '@angular/core';
import { IngresosMainForm } from '../../components/ingresos-main-form/ingresos-main-form';


@Component({
  selector: 'app-ingresos-delete',
  imports: [IngresosMainForm],
  templateUrl: './ingresos-delete.html',
  styleUrl: './ingresos-delete.css',
})
export class IngresosDelete {}
