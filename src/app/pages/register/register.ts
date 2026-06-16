import { Component,inject } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { RegisterRequest } from '../../models/register-request';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private fb = inject(FormBuilder);
  lobs=[
    'L70',
    'LCOMM',
    'CAPS',
    'EOC'
  ]

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
    const response : RegisterRequest = this.registerForm.value as RegisterRequest;
        console.log(response);
  }

  
  
}