import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router,private cartService:CartService) { }

  product:Product[];
  cart :Cart[]=[];
  cartData: { len: number; cost: number; };
  ngOnInit(): void {
    this.cart=this.cartService.cart;
    this.cartData=this.cartService.cartData;
  }
  logout(){
        localStorage.clear();
        this._router.navigateByUrl("/home");
      }
    login(){
          
          this._router.navigateByUrl("/login");
        }

      AddToCart(product:Product):void {
        this.cartService.addProductToCard(product);
          }
        deleteFromCart(product:Product):void{
        this.cartService.deleteFromCart(product);
        }
}
