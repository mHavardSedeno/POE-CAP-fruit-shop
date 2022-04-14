import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
  }

  /* Method to add a product */
  saveProduct(productForm:any) {
    let product_value = productForm.value;
    this.ps.saveProduct(product_value).subscribe(() => console.log("Le produit a bien été ajouté"));
  }
}
