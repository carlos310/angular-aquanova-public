import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Gastos{
    @PrimaryGeneratedColumn()
    gas_id!:number;

    @Column({type:"varchar", length:255})
    gas_descripcion!:string; 
    @Column({type:"int"})
    gas_monto!:number;
    @Column({type:"date"})
    gas_fecha!:Date;
    @Column({type:"int"}) 
    emp_id!:number; 
    @Column({type:"int"})
    usu_id!:number;
   
}