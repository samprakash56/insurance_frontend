import { Component,inject } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../models/register-request';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  lobs=[
    'L70',
    'LCOMM',
    'CAPS',
    'EOC'
  ]

  constructor(private authService: AuthService){
  }

  registerForm: FormGroup = 
  this.fb.group({
    username:[
      '',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)]
    ],
    password:[
      '',
     [ Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]
    ],
    firstName: [
      '',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)]
    ],
    lastName: [
      '',
      [Validators.required]
    
    ],
    email:[
      '',
      [Validators.required,
      Validators.email]
    ],
    lob:[
      '',
      [Validators.required]
    ]
  })
  register(){
      if(this.registerForm.invalid){
      return;
    }
      this.authService.register(this.registerForm.value as RegisterRequest)
      .subscribe({
        next:(response)=>{
          console.log(response)
          alert(response.message)
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);


        },
        error: error => {
        if(error.error?.message){
          alert(error.error.message)
        }
        else{
          alert("Registration Failed")
        }
      }
    })
  }
}