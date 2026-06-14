import { Injectable } from '@angular/core';
import {UsersInterface} from '../interfaces/users-interface';
@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private url="http://localhost:3002/usuarios";
  constructor(){}
  async getUsersInfo(): Promise<UsersInterface[]>{
    const response=await fetch(this.url);
    const data= await response.json();
    return data as UsersInterface[];
  }
  async getUserById(id:number):Promise<UsersInterface>{
    const response=await fetch(`${this.url}/${id}`);
    const data= await response.json();
    return data as UsersInterface;
  }
  async getUserByName(name:string):Promise<UsersInterface[]>{
    const response= await fetch(`${this.url}?nombre=${encodeURIComponent(name)}`);
    const data= await response.json();
    return data as UsersInterface[];
  }
  async deleteUser(id:number):Promise<void>{
    await fetch(`${this.url}/${id}`, {method:'DELETE'});
  }
  async addUser(user:UsersInterface):Promise<UsersInterface>{
    const response= await fetch(this.url, {method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(user)});
    return await response.json();
  }
  async updateUser(id: number,user:UsersInterface):Promise<UsersInterface>{
    const response= await fetch(`${this.url}/${id}`, {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(user)}); 
    return await response.json();   
  }
  async logInUser(email:string|undefined, contrasena:string|undefined){
    const userName= await fetch(`${this.url}?email=${email}`);
    const data:UsersInterface[]= await userName.json();

  
      const user=data[0];
      if(user.email=== email && user.contrasena ===contrasena){
        console.log(user);
        alert("Login exitoso");
      return user;
      }else{
        return null;
      }
  
     
  }
}