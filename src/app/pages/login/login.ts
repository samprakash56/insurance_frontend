import { Component,inject } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { LoginRequest } from '../../models/login-requests';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  private fb = inject(FormBuilder)
  private router = inject(Router)

  constructor(private authService: AuthService){}

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

  const request: LoginRequest =
    this.loginForm.value as LoginRequest;

  this.authService.login(request)
    .subscribe({

      next: (response) => {

        console.log(response);

        localStorage.setItem(
          'token',
          response.token
        );

        localStorage.setItem(
          'username',
          response.username
        );

        localStorage.setItem(
          'role',
          response.role
        );

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);

      },

      error: error => {

        if(error.error?.message){
          alert(error.error.message);
        }
        else{
          alert('Login Failed');
        }

      }

    });

}

}
