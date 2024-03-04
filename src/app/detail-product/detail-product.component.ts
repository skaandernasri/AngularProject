import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../core/models/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number
p!:product
constructor(private Act:ActivatedRoute,private ps:ProductService){}
ngOnInit(){
this.id = this.Act.snapshot.params['id']
this.p=this.ps.listProduct.find(produit=>produit.id==this.id)!
}
}
