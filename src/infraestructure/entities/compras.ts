import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Compras{
    @PrimaryGeneratedColumn()
    cpr_id!:number;

    @Column({type:"int"})
    cpr_total!:number; 
    @Column({type:"int"})
    cpr_cantidad!:number; 
    @Column({type:"date"})
    cpr_fecha!:Date;
    @Column({type:"varchar", length:255})
    cpr_proveedor!:string;
    @Column({type:"int"}) 
    usu_id!:number; 
    
    
}