import { Component } from '@angular/core';
import { UsersMainForm } from '../../components/users-main-form/users-main-form';

@Component({
  selector: 'app-sign-in-form',
  standalone:true,
  imports: [UsersMainForm],
  templateUrl: './sign-in-form.html',
  styleUrl: './sign-in-form.css',
})
export class SignInForm {}
