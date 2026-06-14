import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-main-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-main-form.html',
  styleUrl: './users-main-form.css',
})
export class UsersMainForm {
  constructor(private router: Router) {}
  private rolHiddenRoutes: string[] = ['/user-deletion-form', '/user-edition-form'];
  get rolHidden(): boolean {
    return this.rolHiddenRoutes.includes(this.router.url);
  }
  private signingHidden: string[] = ['/signIn', '/login'];
  get hiddenSignInFields(): boolean {
    return this.signingHidden.includes(this.router.url);
  }
  nombre: string = '';
  email: string = '';
  contrasena: string = '';
  rol: string = '';


  @Output() datosListos = new EventEmitter<{ email: string; contrasena: string }>();

  emitirDatos() {
    const datos = { email: this.email, contrasena: this.contrasena };
    this.datosListos.emit(datos);
    console.log("Datos emitidos desde UsersMainForm:", datos);
  }
  
}
