import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/user";
import { Producto } from "../entities/producto";
import { Ingresos } from "../entities/ingresos";
import { Gastos } from "../entities/gastos";
import { Costos } from "../entities/costos";
import { Compras } from "../entities/compras";
import envs from "./environment-vars";
dotenv.config();
export const AppDataSource= new DataSource({
    type:"postgres",
    host:"localhost",
    port:Number(envs.DB_PORT),
    username:envs.DB_USER,
    password:envs.DB_PASSWORD,
    database:envs.DB_NAME,
    synchronize: true, //no se usa en prod 
    logging:true,
    entities:[User, Producto, Ingresos,Gastos,Costos,Compras]
});

//conetar a la DB
export const connectDB=async ()=>  {
    try {
        await AppDataSource.initialize();
        console.log("connectado a la base de datos");
    } catch (error) {
        console.log(error);
        process.exit(1);    //algo ha fallado en el proceso normal cuando sale 1
    }
}