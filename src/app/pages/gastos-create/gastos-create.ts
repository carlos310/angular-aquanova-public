import { Component } from '@angular/core';
import { Gastos } from '../../gastos-form/gastos-form';

@Component({
  selector: 'app-gastos-create',
  imports: [Gastos],
  templateUrl: './gastos-create.html',
  styleUrl: './gastos-create.css',
})
export class GastosCreate {}
