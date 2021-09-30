import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 formGroup : FormBuilder; 
registerForm ;

  constructor(private fb:FormBuilder) {
    this.formGroup = fb;
   }

  ngOnInit() {
      this.registerForm = this.formGroup.group({
        name:['',[Validators.required,Validators.minLength(2)]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(7)]]
      });
  }
     get f() {return this.registerForm.controls}

     submit(){
       console.log(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.password)
     }
}
