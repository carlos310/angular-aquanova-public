import { Component } from '@angular/core';
import { IngresosMainForm } from '../../components/ingresos-main-form/ingresos-main-form';

@Component({
  selector: 'app-ingresos-edit',
  imports: [IngresosMainForm],
  templateUrl: './ingresos-edit.html',
  styleUrl: './ingresos-edit.css',
})
export class IngresosEdit {}
