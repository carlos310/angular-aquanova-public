
import { Gasto } from "../domain/gastos";
import { GastoPort } from "../domain/gastosPort";



export class GastoApplication{
    private port:GastoPort;
    constructor(port:GastoPort){
        this.port=port;
    };

    async createGastos(gasto:Gasto):Promise<number>{
        //tener en cuenta que antes de crear toca validar si el correo ya existe
        const existGasto=await this.port.getGastoById(gasto.id);
        if(existGasto){
            throw new Error("Un Gasto ya existe con este id");
        }
        return this.port.createGasto(gasto);
    }
    
    async getGastoById(id:number):Promise<Gasto|null>{
        return await this.port.getGastoById(id);
    }
    async getAllGastos():Promise<Gasto[]>{
        return await this.port.getGastoAllGasto();
    };
    async updateGasto(id:number, gasto:Partial<Gasto>):Promise<boolean>{
        const existingGasto=await this.port.getGastoById(id);
        if(!existingGasto){
            throw new Error("No se puede actualizar porque el Gasto no existe");
        }
        if(gasto.id){
            const idTaken= await this.port.getGastoById(gasto.id);
            if(idTaken&&idTaken.id!==id){
                throw new Error("el id ya está en uso");

            }
        }
        return this.port.updateGasto(id, gasto);
    }
    async  deleteGasto(id:number):Promise<boolean>{
        const existGasto= await this.port.getGastoById(id);
        if(existGasto){
            throw new Error("No es posible borrar el Gasto tan pronto este no existe");
        }
        return await this.port.deleteGasto(id);
    };
}
