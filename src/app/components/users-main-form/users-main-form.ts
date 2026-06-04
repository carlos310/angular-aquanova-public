import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'http';


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
  private logInHidden: string[]=[
    '/logIn'
  ];
  get hiddenLogInFields():boolean{
    return this.logInHidden.includes(this.router.url);
  };
}
