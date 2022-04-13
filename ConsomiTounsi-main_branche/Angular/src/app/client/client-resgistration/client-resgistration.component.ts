import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-resgistration',
  templateUrl: './client-resgistration.component.html',
  styleUrls: ['./client-resgistration.component.css']
})
export class ClientResgistrationComponent implements OnInit {
  client : Client = new Client();
  constructor(private clientService : ClientService , 
    private router :Router) { }

  ngOnInit(): void { 
    this.client=new Client();
  }
  saveClient(){
    this.clientService.createClient(this.client).subscribe(data=>{
      console.log(data);
    });
  }

  OnSubmit(){
    this.saveClient();
    console.log(this.client);
    
    
  }
}
