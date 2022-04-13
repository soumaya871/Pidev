import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { OrderService } from '../../service/order.service';
import{Order} from '../../model/Order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  l:Order[];
  orderId:number;
  orderP:string;
    Object: Object[];
    constructor(public orderService: OrderService) { }
  
    ngOnInit(): void {this.getorders();
   
    
      
    }
 getorders(){ this.orderService.getOrder().subscribe((data:Order[])=>{
      console.log(data);
      this.l=data;

    })}
  
    deleteOrder(id:number){
      this.orderService.deleteOrder(id).subscribe();
       
    }
  stat(){
  
  }

  
  }
  