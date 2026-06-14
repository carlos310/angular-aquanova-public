import { Component } from '@angular/core';
import { UsersMainForm } from '../../components/users-main-form/users-main-form';
import { UserServices } from '../../services/users-services';
import { UserDataService } from "../../services/user-data-service";
@Component({
  selector: 'app-log-in-form',
  imports: [UsersMainForm],
  templateUrl: './log-in-form.html',
  styleUrl: './log-in-form.css',
})

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

