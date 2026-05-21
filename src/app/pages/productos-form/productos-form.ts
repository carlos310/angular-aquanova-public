import { Component } from '@angular/core';
import { ProductosMainForm } from '../../components/productos-main-form/productos-main-form';

@Component({
  selector: 'app-productos-form',
  imports: [ProductosMainForm],
  templateUrl: './productos-form.html',
  styleUrl: './productos-form.css',
})
export class ProductosForm {}
