import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductResponse } from '../../models/product-response';
import { PolicyService } from '../../services/policy.service';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{

  username = localStorage.getItem('username');
  role = localStorage.getItem('role');
  private router = inject(Router);
  products : ProductResponse[]=[];
  constructor(private policyService:PolicyService, private cdr:ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadProducts();
    console.log(this.products)
  }
  // ngOnInit(): void {

  // this.products = [
  //   {
  //     id: 1,
  //     productCode: 'P1001',
  //     productName: 'Health Basic',
  //     premium: 15000
  //   }
  // ];


  loadProducts(){

  this.policyService.getAllProducts()
    .subscribe({

      next:(response)=>{

        console.log("Response received");
        console.log(response);

        this.products = [...response];
        this.cdr.detectChanges();
        console.log("Products Length:", this.products.length);

      },

      error:(error)=>{

        console.log("API Error");
        console.log(error);

      }

    });

}
  
  logout(){

    localStorage.clear();

    this.router.navigate(['/login']);

  }
}