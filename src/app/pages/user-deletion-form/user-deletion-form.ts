import { Component } from '@angular/core';
import { UsersMainForm } from '../../components/users-main-form/users-main-form';

@Component({
  selector: 'app-user-deletion-form',
  standalone:true,
  imports: [UsersMainForm],
  templateUrl: './user-deletion-form.html',
  styleUrl: './user-deletion-form.css',
})
export class UserDeletionForm {}
