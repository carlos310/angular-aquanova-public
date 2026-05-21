import { Component } from '@angular/core';
import { UsersMainForm } from '../../components/users-main-form/users-main-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-edition-form',
  standalone:true,
  imports: [RouterModule,UsersMainForm],
  templateUrl: './user-edition-form.html',
  styleUrl: './user-edition-form.css',
})
export class UserEditionForm {}
