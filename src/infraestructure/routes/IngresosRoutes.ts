import { Router } from "express";
import { IngresosAdapter } from '../adapter/ingresosAdapter';
import { IngresoApplication } from "../../app/ingresoApplication";
import { IngresoController} from '../controller/ingresosController';

const ingresoRouter=Router();
//inicializacion de las capas
const ingresoAdapter=new IngresosAdapter;
const IngresoApp= new IngresoApplication(ingresoAdapter);
const ingresoController=new IngresoController(IngresoApp);
//definicion de rutas
ingresoRouter.post("/ingresos", async(req, res)=>{
    try {
        await ingresoController.createIngreso(req,res);
    } catch (error) {
        res.status(500).json({message:"Error en la creación de Ingreso", error});
    }
});
ingresoRouter.put("/Ingreso/:id", async (req, res)=>{
    try {
        await ingresoController.updateIngreso(req, res);
    } catch (error) {
        res.status(500).json({message:"Error en la cactualización del Ingreso", error});
    }
});
ingresoRouter.delete("/ingresos/:id", async(req, res)=>{
    try {
        await ingresoController.deleteIngreso(req, res);
    } catch (error) {
        res.status(500).json({message:"Error al borrar Ingreso por id", error});
    }
});
//se hace el IngresoRouter para el get de los emails y como se requierede consultar y se tiene un indice que es el email se pone de la siguiente manera
ingresoRouter.get("/ingresos/id/:id", async(req,res)=>{
    try {
        await ingresoController.getIngresoById(req, res);
    } catch (error) {
        res.status(500).json({message:"Error en la consulta por id", error});
    }
});

ingresoRouter.get("/ingresos", async (req,res)=>{
    try {
       await ingresoController.getIngresoAllIngreso(req, res); 
    } catch (error) {
       res.status(500).json({message:"Error en la consulta de datos", error}); 
    }
});
export default ingresoRouter;
