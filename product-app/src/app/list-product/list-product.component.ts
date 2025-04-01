import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  imports: [],
  standalone: true,
  templateUrl: './list-product.component.html'
})
export class ListProductComponent {
  productsList:Product[];
  constructor(private productService : ProductService, private router:Router){}

  ngOnInit(){
    this.listingAllProducts();
  }
  private listingAllProducts():void{
    this.productService.listingProducts().subscribe(
      lamd => {
        this.productsList = lamd;
      }
    );
  }
  
  // editProduct(id: number): void {
  //   this.router.navigate(['/editar', id]);
  // }

  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      {
        next: () => {
          this.listingAllProducts();
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
}
