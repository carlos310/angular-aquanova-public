import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Costos{
    @PrimaryGeneratedColumn()
    cos_id!:number;

    @Column({type:"varchar", length:255})
    cos_descripcion!:string; 
    @Column({type:"int"})
    cos_monto!:number; 
    @Column({type:"date"})
    cos_fecha!:Date;
    @Column({type:"varchar", length:255})
    cos_fuente!:string;
    @Column({type:"int"}) 
    emp_id!:number; 
    @Column({type:"int"})
    usu_id!:number;
    
}