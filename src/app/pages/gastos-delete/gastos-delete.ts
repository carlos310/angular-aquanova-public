import { Component } from '@angular/core';
import { Gastos } from '../../components/gastos-form/gastos-form';

@Component({
  selector: 'app-gastos-delete',
  imports: [Gastos],
  templateUrl: './gastos-delete.html',
  styleUrl: './gastos-delete.css',
})
export class GastosDelete {}
