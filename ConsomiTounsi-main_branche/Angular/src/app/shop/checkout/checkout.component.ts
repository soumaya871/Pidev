import { Component, OnInit } from '@angular/core';

import { Cart } from '../../model/cart';
import { CartService } from '../../service/cart.service';
import{render} from'creditcardpayments/creditcardpayments';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Cart[];
  showModal:any;
  cartData={len : 0,cost:0};

  constructor(private cartService: CartService,private OrderService:OrderService) {
  render({
    id:"#MyPappalButton",
    currency:"USD",
    value:"1000",

  }
  );
    }
  
  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartData = this.cartService.cartData;
  }
public captureScreen(){
 
}
/*createOrders(){
  const cart=this.cartService.cart;

  this.OrderService.CreateOrder( cart)
  .then(() =>{
    console.log('order done with success !');
  })
  .catch(
    (error) =>{
      console.log(error);
    }
      )
    }*/
  }
