import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formBuilder: FormBuilder;
  loginForm;

  submitted = false;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
       name  :['',[Validators.required,Validators.minLength(2)]],
       email :['',[Validators.required,Validators.email]]
    })
  }
           
 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }
 
 //submit 
 submit(){
   console.log(this.loginForm.value.name,this.loginForm.value.email)
 }

}
