import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:3000/product");
  }

  getProductsLimited(page:any) {
    return this.http.get("http://localhost:3000/product?_page="+page+"&_limit=3");
  }

  deleteProduct(id:any) {
    return this.http.delete("http://localhost:3000/product/"+id)
  }

  saveProduct(productForm:any) {
    return this.http.post("http://localhost:3000/product/", productForm);
  }

  unstock(id:any, available:any) {
    return this.http.patch("http://localhost:3000/product/"+id, {available: false});
  }

}
