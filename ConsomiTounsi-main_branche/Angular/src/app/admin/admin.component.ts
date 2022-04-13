import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';

import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  clients: Client[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getClients();

  }
private  getClients(){
  this.adminService.getClient().subscribe(data=>
    {this.clients=data;
  });
  
}
}
