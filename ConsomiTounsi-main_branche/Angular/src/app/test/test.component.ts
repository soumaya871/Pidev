import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';
import { Product } from '../model/Product';
import { CartService } from '../service/cart.service';
import{ProductService} from'../shared/product.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  data:any;
  products:Product[];
  searchValue:string;
  image:Image[];
  constructor( private cartService:CartService,private ProductService:ProductService) {

   }

  ngOnInit(): void {
  this.ProductService.getProductList().subscribe(
    (data:Product[])=> this.products=data);
  
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





