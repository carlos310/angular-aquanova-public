import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    usu_id!:number;

    @Column({type:"varchar", length:255})
    usu_nombre!:string; 
    @Column({type:"varchar", length:255})
    usu_apellido!:string; 
    @Column({type:"varchar", length:255, unique:true})
    usu_email !:string;
    @Column({type:"varchar", length:255, unique:true})
    usu_contrasena!:string;
    @Column({type:"int"})
    usu_telefono!:number;
    @Column({type:"varchar", length:255}) 
    usu_direccion!:string; 
}