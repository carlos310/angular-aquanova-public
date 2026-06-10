import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-main-form',
  imports: [],
  templateUrl: './users-main-form.html',
  styleUrl: './users-main-form.css',
})
export class UsersMainForm {
  constructor (private router:Router){};
  private rolHiddenRoutes:string[]=[
    '/user-deletion-form',
    '/user-edition-form'
  ];
  get rolHidden():boolean{
    return this.rolHiddenRoutes.includes(this.router.url);
  };
  private signingHidden:string[]=[
    '/signIn'
  ];
  get hiddenSignInFields():boolean{
    return this.signingHidden.includes(this.router.url);
  };
  nombre: string = "";
  email: string = "";
  contrasena: string = "";
  rol:string="";
  @Output() datosListos = new EventEmitter<{email: string, contrasena: string}>();
  async guardarDatos(){
     this.datosListos.emit({email: this.email, contrasena: this.contrasena });
  }
}
