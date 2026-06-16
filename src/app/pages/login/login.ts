import { Component,inject } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { LoginRequest } from '../../models/login-requests';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  private fb = inject(FormBuilder)

  loginForm : FormGroup =
  this.fb.group({
    username:[
      '',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)]
    ],
    password:[
      "",
      [Validators.required]
    ]
  }) 

  login(){
    const response : LoginRequest = this.loginForm.value as LoginRequest;
    console.log(response);
  }

}
