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
  
  constructor(private clientHttp: HttpClient) {}

  // Fetch all products from the API
  // This method returns an observable of type Product array
  listingProducts(): Observable<Product[]> {
    return this.clientHttp.get<Product[]>(this.url);
  }

  // Add a new product
  addProduct(product: Product): Observable<Product> {
    return this.clientHttp.post<Product>(this.url2, product);
  }

  //Get a product by ID
  getProduct(id: number){
    return this.clientHttp.get<Product>(`${this.url}/${id}`);
  }

  //Update a product
  updateProduct(id:number,product: Product): Observable<Product> {
    return this.clientHttp.put<Product>(`${this.url3}/${id}`, product);
  }

  //Delete a product by ID
  deleteProduct(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.url4}/${id}`);
  }
}
