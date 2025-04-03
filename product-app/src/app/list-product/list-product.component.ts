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
  // Lista de productos que rellenaremos y mostraremos en la vista
  productsList:Product[];
  
  // Constructor de la clase ListProductComponent
  // Inyecta el servicio ProductService y el router de Angular
  constructor(private productService : ProductService, private router:Router){}

  // Este metodo se ejecuta al iniciar el componente
  ngOnInit(){
    this.listingAllProducts();
  }

  // Este metodo llama al servicio ProductService para obtener la lista de productos
  // mediante una peticion HTTP GET a la API desde el servicio
  private listingAllProducts():void{
    this.productService.listingProducts().subscribe(
      lamd => {
        // Almacenamos la respuesta en la variable productsList
        this.productsList = lamd;
      }
    );
  }
  
  // editProduct(id: number): void {
  //   this.router.navigate(['/editar', id]);
  // }

  // Este metodo llama al servicio ProductService para borrar un producto
  // mediante una peticion HTTP DELETE a la API desde el servicio
  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      {
        // Si la peticion es correcta, recargamos la lista de productos
        next: () => {
          this.listingAllProducts();
        },
        // Si hay un error, lo mostramos en la consola
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
}
