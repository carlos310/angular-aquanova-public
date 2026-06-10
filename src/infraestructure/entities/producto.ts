import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Producto{
    @PrimaryGeneratedColumn()
    prod_id!:number;

    @Column({type:"varchar", length:255})
    prod_nombre!:string; 
    @Column({type:"varchar", length:255})
    prod_descripcion!:string; 
    @Column({type:"int"})
    prod_precio_venta!:number;
    @Column({type:"int"})
    prod_precio_compra!:number;
    @Column({type:"int"}) 
    prod_stock!:number; 
    @Column({type:"int"})
    prod_categoria!:string;
    @Column({type:"int"})
    fk_prov_id!:number;
     
}