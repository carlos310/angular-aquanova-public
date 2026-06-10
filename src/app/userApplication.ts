
import { User } from "../domain/user";
import { UserPort } from "../domain/userPort";



export class UserApplication{
    private port:UserPort;
    constructor(port:UserPort){
        this.port=port;
    };

    async createUser(user:Omit<User, "id">):Promise<number>{
        //tener en cuenta que antes de crear toca validar si el correo ya existe
        const existUser=await this.port.getUserByEmail(user.email);
        if(existUser){
            throw new Error("Un usuario ya existe con este email");
        }
        return this.port.createUser(user);
    }
    async getUserById(id:number):Promise<User|null>{
        return await this.port.getUserById(id);
    }
    async getUserByEmail(email:string):Promise<User|null>{
        return await this.port.getUserByEmail(email);
    }
    async getAllUsers():Promise<User[]>{
        return await this.port.getUserAllUser();
    };
    async updateUser(id:number, user:Partial<User>):Promise<boolean>{
        const existingUser=await this.port.getUserById(id);
        if(!existingUser){
            throw new Error("No se puede actualizar porque el usuario no existe");
        }
        if(user.email){
            const emailTaken= await this.port.getUserByEmail(user.email);
            if(emailTaken&&emailTaken.id!==id){
                throw new Error("el email ya está en uso");

            }
        }
        return this.port.updateUser(id, user);
    }
    async  deleteUser(id:number):Promise<boolean>{
        const existUser= await this.port.getUserById(id);
        if(existUser){
            throw new Error("No es posible borrar el usuario tan pronto este no existe");
        }
        return await this.port.deleteUser(id);
    };
}
