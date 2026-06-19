import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product-response';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {

  private apiUrl = 'http://localhost:8080/policy';

  constructor(private http:HttpClient){}

  getAllProducts():Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>(this.apiUrl+"/products")
  }

}
