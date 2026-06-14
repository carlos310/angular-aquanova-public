import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class UserDataService {
    private nombre:string="";
    private email:string="";
    private contrasena:string="";
    private rol:string="";

    setUserData(nombre:string, email:string, contrasena:string, rol:string){
        this.nombre=nombre;
        this.email=email;
        this.contrasena=contrasena;
        this.rol=rol;
    }
    getUserData(){
        return{
            nombre:this.nombre,
            email:this.email,
            contrasena:this.contrasena,
            rol:this.rol
        }
    }
}