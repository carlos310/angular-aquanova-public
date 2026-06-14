<<<<<<< HEAD
import { Component,EventEmitter,Output } from '@angular/core';
=======
import { Component, EventEmitter, Output } from '@angular/core';
>>>>>>> 79dd6e94249c64e4c5b91fe8f7864da5db2ad181
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServices } from '../../services/users-services';
import { UserDataService } from '../../services/user-data-service';


@Component({
  selector: 'app-users-main-form',
<<<<<<< HEAD
=======
  standalone: true,
>>>>>>> 79dd6e94249c64e4c5b91fe8f7864da5db2ad181
  imports: [FormsModule],
  templateUrl: './users-main-form.html',
  styleUrl: './users-main-form.css',
})
export class UsersMainForm {
<<<<<<< HEAD
  constructor (private router:Router,  private userService: UserServices,
    private userData: UserDataService){};
  private rolHiddenRoutes:string[]=[
    '/user-deletion-form',
    '/user-edition-form'
  ];
  get rolHidden():boolean{
=======
  constructor(private router: Router) {}
  private rolHiddenRoutes: string[] = ['/user-deletion-form', '/user-edition-form'];
  get rolHidden(): boolean {
>>>>>>> 79dd6e94249c64e4c5b91fe8f7864da5db2ad181
    return this.rolHiddenRoutes.includes(this.router.url);
  }
  private signingHidden: string[] = ['/signIn', '/login'];
  get hiddenSignInFields(): boolean {
    return this.signingHidden.includes(this.router.url);
<<<<<<< HEAD
  };
  private logInHidden: string[]=[
    '/logIn'
  ];
  get hiddenLogInFields():boolean{
    return this.logInHidden.includes(this.router.url);
  };
  nombre: string = "";
  email: string = "";
  contrasena: string = "";
  rol:string="";
  @Output() datosListos = new EventEmitter<{email: string, contrasena: string}>();
  async guardarDatos(){
     this.datosListos.emit({email: this.email, contrasena: this.contrasena });
  }
=======
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
  
>>>>>>> 79dd6e94249c64e4c5b91fe8f7864da5db2ad181
}
