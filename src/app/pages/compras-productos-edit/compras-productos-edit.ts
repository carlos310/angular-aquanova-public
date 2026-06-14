import { Component } from '@angular/core';
import { ComprasProductosForm } from '../../components/compras-productos-form/compras-productos-form';


@Component({
  selector: 'app-compras-productos-edit',
  imports: [ComprasProductosForm],
  templateUrl: './compras-productos-edit.html',
  styleUrl: './compras-productos-edit.css',
})
export class ComprasProductosEdit {}
