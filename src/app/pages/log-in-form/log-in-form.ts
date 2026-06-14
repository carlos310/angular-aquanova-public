<<<<<<< HEAD
import { Component } from '@angular/core';
import { UsersMainForm } from '../../components/users-main-form/users-main-form';
import { UserServices } from '../../services/users-services';
import { UserDataService } from "../../services/user-data-service";
@Component({
  selector: 'app-log-in-form',
  imports: [UsersMainForm],
=======
import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {login, getMe} from "../../../../src/infrastructure/adapter/authService.js";
import { UsersMainForm } from "../../components/users-main-form/users-main-form";
@Component({
  selector: 'app-log-in-form',
  standalone: true,
  imports: [UsersMainForm,CommonModule],
>>>>>>> 79dd6e94249c64e4c5b91fe8f7864da5db2ad181
  templateUrl: './log-in-form.html',
  styleUrls: ['./log-in-form.css'],
})
<<<<<<< HEAD

export class LogInForm {

  constructor(private userService: UserServices,
    private userData: UserDataService){};
  async guardarUserLogged(datos:{email:string, contrasena:string}) {
    const email= datos.email;
    const contrasena= datos.contrasena;
    try {
      
      const usuario = await this.userService.logInUser(email, contrasena);

      if (usuario) {
        alert("usuario logueado");
      } else {
        alert("revise su usuario y contraseña");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
    console.log(`${email} and ${contrasena}`);
  }
  
}

=======
export class LogInForm {
  datosForm: { email: string; contrasena: string } | null = null;
  mensajeError: string = '';

  recibirDatos(datos: { email: string; contrasena: string }) {
    this.datosForm = datos;
  }

  async handleLogin() {
    if (!this.datosForm) return;
    try {
      await login(this.datosForm.email, this.datosForm.contrasena);
      const user = await getMe();
      console.log("Usuario autenticado:", user);
      alert(`Usuario Logueado con exito, bienvenido ${user.name}`);
    } catch (error) {
      this.mensajeError = "Credenciales inválidas";
    }
  }
}

  

>>>>>>> 79dd6e94249c64e4c5b91fe8f7864da5db2ad181
