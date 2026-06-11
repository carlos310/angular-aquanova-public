import { Router } from "express";
import { UserAdapter } from '../adapter/userAdapter';
import { UserApplication } from "../../app/userApplication";
import { UserController} from '../controller/userController';

const userRouter=Router();
//inicializacion de las capas
const userAdapter=new UserAdapter;
const userApp= new UserApplication(userAdapter);
const userController=new UserController(userApp);
//definicion de rutas
userRouter.post("/users", async(req, res)=>{
    try {
        await userController.createUser(req,res);
    } catch (error) {
        res.status(500).json({message:"Error en la creación de usuario", error});
    }
});
userRouter.put("/user/:id", async (req, res)=>{
    try {
        await userController.updateUser(req, res);
    } catch (error) {
        res.status(500).json({message:"Error en la cactualización del usuario", error});
    }
});
userRouter.delete("/users/:id", async(req, res)=>{
    try {
        await userController.deleteUser(req, res);
    } catch (error) {
        res.status(500).json({message:"Error al borrar usuario por id", error});
    }
});
//se hace el userRouter para el get de los emails y como se requierede consultar y se tiene un indice que es el email se pone de la siguiente manera
userRouter.get("/users/id/:id", async(req,res)=>{
    try {
        await userController.getUserById(req, res);
    } catch (error) {
        res.status(500).json({message:"Error en la consulta por id", error});
    }
});

userRouter.get("/users/email/:email", async(req,res)=>{
    try {
        await userController.getUserByEmail(req, res);
    } catch (error) {
        res.status(500).json({message:"Error en la consulta por email", error});
    }
});

userRouter.get("/users", async (req,res)=>{
    try {
       await userController.getUserAllUser(req, res); 
    } catch (error) {
       res.status(500).json({message:"Error en la consulta de datos", error}); 
    }
});
export default userRouter;
