
import { Ingreso } from "../domain/ingresos";
import { IngresoPort } from "../domain/ingresosPort";



export class IngresoApplication{
    private port:IngresoPort;
    constructor(port:IngresoPort){
        this.port=port;
    };

    async createIngreso(ingreso:Ingreso):Promise<number>{
        //tener en cuenta que antes de crear toca validar si el correo ya existe
        const existIngreso=await this.port.getIngresoById(ingreso.id);
        if(existIngreso){
            throw new Error("Un Ingreso ya existe con este id");
        }
        return this.port.createIngreso(ingreso);
    }
    
    async getIngresoById(id:number):Promise<Ingreso|null>{
        return await this.port.getIngresoById(id);
    }
    async getAllIngresos():Promise<Ingreso[]>{
        return await this.port.getIngresoAllIngreso();
    };
    async updateIngreso(id:number, ingreso:Partial<Ingreso>):Promise<boolean>{
        const existingIngreso=await this.port.getIngresoById(id);
        if(!existingIngreso){
            throw new Error("No se puede actualizar porque el Ingreso no existe");
        }
        if(ingreso.id){
            const idTaken= await this.port.getIngresoById(ingreso.id);
            if(idTaken&&idTaken.id!==id){
                throw new Error("el id ya está en uso");

            }
        }
        return this.port.updateIngreso(id, ingreso);
    }
    async  deleteIngreso(id:number):Promise<boolean>{
        const existIngreso= await this.port.getIngresoById(id);
        if(existIngreso){
            throw new Error("No es posible borrar el Ingreso tan pronto este no existe");
        }
        return await this.port.deleteIngreso(id);
    };
}
