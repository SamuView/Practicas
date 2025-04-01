import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product : Product = new Product();
  constructor(private productService:ProductService, private router:Router){}

  onSubmit(){
    this.saveProduct();
    this.product.name = '';
    this.product.description = '';
    this.product.price = 0;
    this.product.stock = 0;
  }
  private saveProduct():void{
    this.productService.addProduct(this.product).subscribe(
      {
        next: (lamd) => {
          this.router.navigate(['/inicio']);
        },
        error:(error: any) => {console.log(error);}
      }
    );
  }
}
