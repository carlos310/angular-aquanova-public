import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Ingresos{
    @PrimaryGeneratedColumn()
    ing_id!:number;

    @Column({type:"varchar", length:255})
    ing_descripcion!:string; 
    @Column({type:"int"})
    ing_monto!:number; 
    @Column({type:"date"})
    ing_fecha!:Date;
    @Column({type:"varchar"})
    ing_fuente!:string;
    @Column({type:"int"}) 
    usu_id!:number; 
}