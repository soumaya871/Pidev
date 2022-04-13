import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Delivery } from '../model/Delivery';
import { DeliveryAgent } from '../model/DeliveryAgent';
import { DeliveryAgentService } from '../service/delivery-agent.service';
import { DeliveryService } from '../service/delivery.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deliverys:Delivery[];
  deliverysapproved:Delivery[];
  
 
  
  delivery:Delivery= new Delivery();
  submitted = false;
  



  constructor(private deliveryService:DeliveryService ,private deliveryagentService:DeliveryAgentService ,private httpClient:HttpClient) { }

  ngOnInit(): void { 
    this.getDeliverys();
  }
  private getDeliverys(){
    this.deliveryService.getDeliveries().subscribe((data: Delivery[])=> {
      console.log(data);
      this.deliverys = data;
    })
  }
  newDelivery(): void {
    this.submitted = false;
    this.delivery = new Delivery();
  }
 
  onSubmit() {
    this.submitted = true;
    console.log(this.delivery.dateDel);
    this.deliveryService
    .passDelivery(this.delivery).subscribe(data => {
      console.log(data);
      this.delivery = new Delivery();
      this.gotoList();    
    }, 
    error => console.log(error));
}
gotoList() {
  this.getDeliverys();
  
  }
  DeleteDelivery(id:number){
    this.deliveryService.DeleteDelivery(id).subscribe();
  }
 

}