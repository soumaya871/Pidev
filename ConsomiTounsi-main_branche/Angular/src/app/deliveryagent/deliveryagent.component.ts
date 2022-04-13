import { Component, OnInit } from '@angular/core';
import { DeliveryAgent } from '../model/DeliveryAgent';
import { DeliveryAgentService } from '../service/delivery-agent.service';
@Component({
  selector: 'app-deliveryagent',
  templateUrl: './deliveryagent.component.html',
  styleUrls: ['./deliveryagent.component.css']
})
export class DeliveryagentComponent implements OnInit {
  deliveryagents:DeliveryAgent[];
  bestdeliveryagent:DeliveryAgent[];
  deliveryagentdispo:DeliveryAgent[];

  idLivreur: number;
  salaire:number;
  deliveryagent:DeliveryAgent= new DeliveryAgent();
  submitted = false;
  showModal:any;
  constructor(private deliveryagentService:DeliveryAgentService) { }

  ngOnInit(): void {
   this.getDeliveryAgents();
  }
  private getDeliveryAgents(){
    this.deliveryagentService.getDeliveryMen().subscribe((data: DeliveryAgent[])=> {
      console.log(data);
      this.deliveryagents = data;
    })
  }
Bestlivreur(){
    this.deliveryagentService.BestLivreur().subscribe((data: DeliveryAgent[])=> {
      console.log(data);
      this.bestdeliveryagent = data;
    });
  }
  Livreurdispo(){
    this.deliveryagentService.Livreurdispo().subscribe((data: DeliveryAgent[])=> {
      console.log(data);
      this.deliveryagentdispo = data;
    });
  }
  newDeliveryAgent(): void {
    this.submitted = false;
    this.deliveryagent = new DeliveryAgent();
  }

  

  onSubmit() {
    this.submitted = true;
    this.deliveryagentService
    .CreateDeliveryAgent(this.deliveryagent).subscribe(data => {
      console.log(data)
      this.deliveryagent = new DeliveryAgent();
      this.gotoList(); 
    }, 
    error => console.log(error));    
  }
  gotoList() {
    this.getDeliveryAgents();
    
    }
  DeleteDeliveryAgent(id:number){
    this.deliveryagentService.DeleteDeliveryAgent(id).subscribe();
  }
  
  
  

}