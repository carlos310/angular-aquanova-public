import { Component } from '@angular/core';
import { ProductosMainForm } from '../../components/productos-main-form/productos-main-form';

@Component({
  selector: 'app-productos-delete-form',
  imports: [ProductosMainForm],
  templateUrl: './productos-delete-form.html',
  styleUrl: './productos-delete-form.css',
})
export class ProductosDeleteForm {}
