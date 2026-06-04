import { Component } from '@angular/core';
import { UsersMainForm } from '../../components/users-main-form/users-main-form';
import { UserServices } from '../../services/users-services';
const buttons=document.getElementById("guardar");
@Component({
  selector: 'app-log-in-form',
  imports: [UsersMainForm],
  templateUrl: './log-in-form.html',
  styleUrl: './log-in-form.css',
})

export class LogInForm {
  constructor(private userService:UserServices){
    if (typeof document !== 'undefined') {

    const email= document.querySelector<HTMLInputElement>("#email");
    const contrasena=document.querySelector<HTMLInputElement>("#contrasena");
    
    buttons?.addEventListener("click", async()=>{
      const emailValue=email?.value;
      const contrasenaValue=contrasena?.value;
      this.userService.logInUser(emailValue, contrasenaValue);
    });
    }
    
  };
  
}

