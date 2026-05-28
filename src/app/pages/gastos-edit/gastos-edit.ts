import { Component } from '@angular/core';
import { Gastos } from '../../gastos-form/gastos-form';

@Component({
  selector: 'app-gastos-edit',
  imports: [Gastos],
  templateUrl: './gastos-edit.html',
  styleUrl: './gastos-edit.css',
})
export class GastosEdit {}
