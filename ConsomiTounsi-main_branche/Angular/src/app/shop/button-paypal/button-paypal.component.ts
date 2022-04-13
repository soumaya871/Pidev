import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../service/cart.service';
import { OrderService } from '../../service/order.service';


import {Cart} from '../../model/cart';
@Component({
  selector: 'app-button-paypal',
  templateUrl: './button-paypal.component.html',
  styleUrls: ['./button-paypal.component.css']
})
export class ButtonPaypalComponent implements OnInit {
  cart:Cart[];
  Cart:any;
 

 
 

@ViewChild('paypal' , {static :true }) paypalElement:ElementRef;
  constructor(private cartService:CartService,private orderService:OrderService) { }

  ngOnInit(): void {
   // this.initConfig();
  
 window.paypal.Buttons(
   {
     style: {
       layout:'horizontal'
     }
   }
 ).render(this.paypalElement.nativeElement)
  }
}