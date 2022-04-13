import { Component, OnInit } from '@angular/core';


import{ProductService} from'../../shared/product.service';
import{CartService}from'../../service/cart.service';
import { Product } from 'src/app/model/Product';
import { from } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:any;data:any;
  products:Product[];
  
  constructor( private cartService:CartService,private ProductService:ProductService) {

   }

  ngOnInit(): void {
  this.ProductService.getProductList().subscribe(
    (data:Product[])=> this.product=data);
  
  }
 getProduct(){
    this.ProductService.getProductList().subscribe(data=>{
          this.products=data;
          console.log('********products: ', this.products);
    })
  }
  AddToCart(product:Product):void {
    this.cartService.addProductToCard(product);
      }
    deleteFromCart(product:Product){
    this.cartService.deleteFromCart(product);
    }
}




