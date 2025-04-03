import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  // Inyectamos el FormsModule y ReactiveFormsModule para trabajar con formularios
  imports: [FormsModule, ReactiveFormsModule],
  standalone : true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  product : Product = new Product();
  id:number;

  // Inyectamos el servicio ProductService para realizar peticiones HTTP
  // Inyectamos el ActivatedRoute para obtener los parámetros de la ruta
  // Inyectamos el Router para navegar entre rutas
  constructor(private productService:ProductService,
              private direction:ActivatedRoute,
              private router:Router
  ){}
  
  // Método que se ejecuta al enviar el formulario
  // Llama al método updateProduct para actualizar el producto
  onSubmit(){
    this.updateProduct();
  }

  // Método que actualiza el producto
  // Llama al servicio ProductService para realizar la petición HTTP PUT
  updateProduct(){
    this.productService.updateProduct(this.id, this.product).subscribe(
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

  // Método que se ejecuta al iniciar el componente
  // Obtiene el ID del producto de la ruta y llama al servicio ProductService para obtener el producto
  ngOnInit(){
    this.id = this.direction.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(
      {
        // Si la petición es exitosa, asigna el producto a la variable product
        next: (lamd) => {
          this.product = lamd;
        },
        // Si hay un error, lo muestra en la consola
        error : (error: any) => {
          console.log(error);
        }
      }
    );
  }

}
