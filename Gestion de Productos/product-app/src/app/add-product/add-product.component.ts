import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  // Inyectamos el FormsModule y ReactiveFormsModule para trabajar con formularios
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  // Creamos una variable product de tipo Product
  // Esta variable se utiliza para almacenar los datos del producto que se va a agregar
  product : Product = new Product();

  // Inyectamos el servicio ProductService para realizar peticiones HTTP
  // Inyectamos el Router para navegar entre rutas
  constructor(private productService:ProductService, private router:Router){}

  /**
   * Método que se ejecuta al enviar el formulario
   * Llama al método saveProduct para guardar el producto
   * Reinicia los campos del formulario después de guardar el producto
   */
  onSubmit(){
    this.saveProduct();
    this.product.name = '';
    this.product.description = '';
    this.product.price = 0;
    this.product.stock = 0;
  }

  /**
   * Método que guarda el producto
   * Llama al servicio ProductService para realizar la petición HTTP POST
   */
  private saveProduct():void{
    this.productService.addProduct(this.product).subscribe(
      {
        // Si la petición es exitosa, redirige a la lista de productos
        next: (lamd) => {
          this.router.navigate(['/inicio']);
        },
        // Si hay un error, lo muestra en la consola
        error:(error: any) => {console.log(error);}
      }
    );
  }
}
