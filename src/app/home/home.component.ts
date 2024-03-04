import { Component } from '@angular/core';
import { product } from '../core/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
prix! : number;
title : string ="welcome home"
listProduct : product[]=[]
constructor(private ps:ProductService){

}
ngOnInit(){
  this.listProduct=this.ps.listProduct
}

hi(){
  alert("Warning")
}
color :string="red"
like(id:any){
 this.listProduct[id].like++;
}
buy(id:any){
  this.listProduct[id].quantity--;

 }
}

