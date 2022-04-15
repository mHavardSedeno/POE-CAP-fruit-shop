import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  firstProducts: any;
  pages = [1,2,3];
  show: boolean = false;
  minPrice: any;
  maxPrice: any;

  newProd = {
      title: "",
      description: "",
      image: "",
      price: 0,
      available: false
  };

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProductsLimited(1);
  }

  getProducts() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      /* console.log(this.products); */
    });
  }

  getProductsLimited(page:any) {
    this.ps.getProductsLimited(page).subscribe(data => {
      this.firstProducts = data;
/*       console.log(this.firstProducts); */    
  });
  }

  supprimer(id:any) {
    this.ps.deleteProduct(id).subscribe(data => { 
      this.getProducts();
      this.show = true;
    }); 
  }

  unstock(id:any, available:any){
    this.ps.unstock(id, available).subscribe(data => {
      this.getProducts();
    });
  }

  setMinPrice(min:any) {
    this.minPrice = min;
  }

  setMaxPrice(max:any) {
    this.maxPrice = max;
  }

  priceFilter(prices:any) {
    let minPrice = prices.value.minPrice;
    let maxPrice = prices.value.maxPrice;

    this.ps.priceFilter(minPrice, maxPrice).subscribe(data => {
      this.products = data;
    });
  }

  keywordFilter(keyword:any){
    this.ps.keywordFilter(keyword.value.keyword).subscribe(data => {
      this.products = data;
    });
  }

  editProduct(formData:any) {
    this.newProd = formData;
    /* console.log(this.newProd);*/
  }

  updateProduct(modifiedProd:any) {
    /* console.log(modifiedProd); */
    this.ps.updateProduct(modifiedProd).subscribe(() => {});
  }

}
