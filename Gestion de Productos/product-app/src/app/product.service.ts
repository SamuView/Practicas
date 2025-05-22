import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/products';
  private url2 = 'http://localhost:8080/products/save';
  private url3 = 'http://localhost:8080/products/update';
  private url4 = 'http://localhost:8080/products/delete';
  
  // Inyectamos el HttpClient para realizar peticiones HTTP
  constructor(private clientHttp: HttpClient) {}

  // Obtener todos los productos de la API
  // Este método devuelve un observable de tipo Product array
  listingProducts(): Observable<Product[]> {
    return this.clientHttp.get<Product[]>(this.url);
  }

  // Añade un nuevo producto
  addProduct(product: Product): Observable<Product> {
    return this.clientHttp.post<Product>(this.url2, product);
  }

  // Obtiene un producto por ID
  getProduct(id: number){
    return this.clientHttp.get<Product>(`${this.url}/${id}`);
  }

  // Actualiza un producto por ID
  updateProduct(id:number,product: Product): Observable<Product> {
    return this.clientHttp.put<Product>(`${this.url3}/${id}`, product);
  }

  // Borra un producto por ID
  deleteProduct(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.url4}/${id}`);
  }
}
