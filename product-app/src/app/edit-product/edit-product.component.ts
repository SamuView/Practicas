import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule, ReactiveFormsModule],
  standalone : true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  product : Product = new Product();
  id:number;

  constructor(private productService:ProductService,
              private direction:ActivatedRoute,
              private router:Router
  ){}
  
  onSubmit(){
    this.updateProduct();
  }

  updateProduct(){
    this.productService.updateProduct(this.id, this.product).subscribe(
      {
        next: (lamd) => {
          this.router.navigate(['/inicio']);
        },
        error:(error: any) => {console.log(error);}
      }
    );
  }

  ngOnInit(){
    this.id = this.direction.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(
      {
        next: (lamd) => {
          this.product = lamd;
        },
        error : (error: any) => {
          console.log(error);
        }
      }
    );
  }

}
