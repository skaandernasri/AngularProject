import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
login=new FormControl('',Validators.required)
pwd=new FormControl('password',Validators.required)
registerForm=new FormGroup({
  cin:new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
  name:new FormControl('',[Validators.required,Validators.minLength(5)]),
  age:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),
})
save(){
  console.log(this.registerForm)
}

}
