import { Injectable } from '@angular/core';
import {ProductosInterface} from '../interfaces/productos-interface';
@Injectable({
  providedIn: 'root',
})

export class ProductoServices {
  private url="http://localhost:3001/productos";
  constructor(){}
  async getProductsInfo(): Promise<ProductosInterface[]>{
    const response=await fetch(this.url);
    const data= await response.json();
    return data as ProductosInterface[];
  }
  async getProductById(id:number):Promise<ProductosInterface>{
    const response=await fetch(`${this.url}/${id}`);
    const data= await response.json();
    return data as ProductosInterface;
  }
  async getProductByName(name:string):Promise<ProductosInterface[]>{
    const response= await fetch(`${this.url}?nombre=${encodeURIComponent(name)}`);
    const data= await response.json();
    return data as ProductosInterface[];
  }
  async deleteProduct(id:number):Promise<void>{
    await fetch(`${this.url}/${id}`, {method:'DELETE'});
  }
  async addProduct(product:ProductosInterface):Promise<ProductosInterface>{
    const response= await fetch(this.url, {method:'POST', headers:{'Content-Type':'application/json'},body:JSON.stringify(product)});
    return await response.json();
  }
  async updateProduct(id: number,product:ProductosInterface):Promise<ProductosInterface>{
    const response= await fetch(`${this.url}/${id}`, {method:'PUT', headers:{'Content-Type':'aplication/json'}, body:JSON.stringify(product)}); 
    return await response.json();   
  }
}

