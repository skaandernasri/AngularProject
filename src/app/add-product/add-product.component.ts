import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  registerForm=new FormGroup({
    title:new FormControl('',[Validators.required,Validators.pattern('[a-z]*[A-Z]*'),Validators.minLength(6)]),
    price:new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
    quantity:new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
  })

}
