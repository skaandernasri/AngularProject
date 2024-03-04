import { Injectable } from '@angular/core';
import { product } from '../core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  listProduct : product[]=[
    {id:1,title:'t-shirt1',price:20,quantity:500,like:0},
    {id:2,title:'t-shirt2',price:5,quantity:500,like:2},
    {id:3,title:'t-shirt3',price:10,quantity:0,like:5}
  
  ] 
  addProduct(p:product ){
    this.listProduct.push(p)
  }
  stat(list:any[],criteria:string,value:any):any{
   return list.filter(o=>o[criteria]==value).length
  }
}
