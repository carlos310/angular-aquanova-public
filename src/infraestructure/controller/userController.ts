import { UserApplication } from "../../app/userApplication";
import { Request, Response } from "express";
import { loadUpdateUserData } from "../util/user-update-validation";
import { User } from '../../domain/user';
import { loadUserData } from "../util/user-validation";
import { loadEmail} from '../util/user-email-validation';
export class UserController{
    private app: UserApplication;
    constructor(application:UserApplication){
        this.app=application;
    }
    async createUser(req:Request, res:Response):Promise<Response>{
        try {
            //validar datos de entrada
            //se hce un reestructuración de los datos
            const{name,lastname,email,password,phone,address}=loadUserData(req.body);
            //crear usuario
            const user:Omit<User, "id">={name,lastname,email,password,phone,address};
            const userId= await this.app.createUser(user);
            return res
            .status(201)
            .json({message:"usuario creado con exito", userId})
        } catch (error) {
            if(error instanceof Error){
                return res
                .status(500)
                .json({
                    error:"error interno del servidor",
                    details: error.message,
                });
            }
            return res.status(500).json({error:"error interno del servidor"});
        }
    }
    async updateUser(req:Request<{ id: string }>, res:Response):Promise<Response>{
        try {
            const id=Number(req.params.id);
            if(Number.isNaN(id)){
                return res.status(400).json({error:"ID invalido"})
            }//si no es un numero retorna true
            const dataLoad= loadUpdateUserData(req.body);
            const updated=await this.app.updateUser(id, dataLoad);
            if(!updated){
                return res.status(404).json({error:"Usuario no encontrado o sin cambios"})
            }
            return res.status(200).json({
                message: "Usuario actualizado con éxito"
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    error: "Error interno del servidor",
                    details: error.message,
                });
            }
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    async getUserById(req:Request<{ id: string }>, res:Response):Promise<Response>{
        try {
            const id=Number(req.params.id);
            if(Number.isNaN(id)){
                return res.status(400).json({error:"ID invalido"})
            }//si no es un numero retorna true
            const user=await this.app.getUserById(id);
            if(!user){
                return res.status(404).json({error:"Usuario no encontrado"})
            }
            return res.status(200).json(user);
        } catch (error) {
             if (error instanceof Error) {
                return res.status(500).json({
                    error: "Error interno del servidor",
                    details: error.message,
                });
            }
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    async getUserByEmail(req:Request, res:Response):Promise<Response>{
        try {
            const {email}=loadEmail(req.params);
            const user= await this.app.getUserByEmail(email);
            if(!user){
                return res.status(404).json({error:"Usuario no encontrado"})
            }
            return res.status(200).json(user);
        } catch (error) {
             if (error instanceof Error) {
                return res.status(500).json({
                    error: "Error interno del servidor",
                    details: error.message,
                });
            }
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    async deleteUser(req:Request<{ id: string }>, res:Response):Promise<Response>{
        try {
            const id=Number(req.params.id);
            if(Number.isNaN(id)){
                return res.status(400).json({error:"ID invalido"})
            }   ;
            const user=await this.app.deleteUser(id);
            if(!user){
                return res.status(404).json({error:"Usuario no encontrado"})
            }
            return res.status(200).json({message:"Usuario eliminado con exito"});
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    error: "Error interno del servidor",
                    details: error.message,
                });
            }
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    async getUserAllUser(req:Request, res:Response):Promise<Response>{
        try {
            const users = await this.app.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({mensaje:"Error al traer los usuarios", error});
        }

    }
}