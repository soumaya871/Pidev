import { Component, OnInit } from '@angular/core';
import { lignedecommande } from '../../model/lignedecommande';
import { OrderService } from '../../service/order.service';
import { Product } from '../../model/Product';
import{Cart} from '../../model/cart';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-ligneorder',
  templateUrl: './ligneorder.component.html',
  styleUrls: ['./ligneorder.component.css']
})
export class LigneorderComponent implements OnInit {
 ligne:lignedecommande[];
 p:Product[];
 lpanier : lignedecommande;
 cartData: { len: number; cost: number; };

data:any;

  lignedecommande: lignedecommande =new lignedecommande;
  cart: Cart[] = [];
  //product:Product;
  //data:any;
  constructor(public orderService: OrderService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }
  Ajoutercommande() {
/*  this.orderService.Ajoutercommande().subscribe(data => {
      console.log(data)
      this.lignedecommande= new lignedecommande();
  
    }, 
    error => console.log(error));
  }*/
  }
  AddToCart(product:Product):void {
    this.cartService.addProductToCard(product);
      }
    deleteFromCart(product:Product):void{
    this.cartService.deleteFromCart(product);
    }
  
    removeElementOfCart(index:number){
      this.cartService.removeElementOfCart(index);
    }
  }
  

