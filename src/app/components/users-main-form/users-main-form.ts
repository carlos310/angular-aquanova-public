import { Component } from '@angular/core';
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
}
