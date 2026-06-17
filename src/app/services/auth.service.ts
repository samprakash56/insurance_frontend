import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-requests';
import { RegisterRequest } from '../models/register-request';
import { LoginResponse } from '../models/login-response';
import { MessageResponse } from '../models/Message-response';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http:HttpClient){}


  register(registerDTO: RegisterRequest): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.apiUrl + '/register',registerDTO);
  }
  login(loginDTO: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl + '/login',loginDTO);
 }


}
