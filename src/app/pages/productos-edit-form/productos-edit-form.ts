import { Component } from '@angular/core';
import { ProductosMainForm } from '../../components/productos-main-form/productos-main-form';

@Component({
  selector: 'app-productos-edit-form',
  imports: [ProductosMainForm],
  templateUrl: './productos-edit-form.html',
  styleUrl: './productos-edit-form.css',
})
export class ProductosEditForm {}
