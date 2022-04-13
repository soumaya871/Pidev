import { Component, OnInit } from '@angular/core';
import{Client} from'src/app/model/client';
import { ClientService } from 'src/app/service/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
clients: Client[];
fullname :String;
email:String;
status:String;
number:String;
role:String;
addess:String;
  constructor(private clientService:ClientService) {  }

  ngOnInit(): void {
    this.getClientList();
  }
private getClientList(){
  this.clientService.getClientList().subscribe((data: Client[])=>{
    this.clients=data;
  });
}

update(client:Client){


}
delete(client:Client){
this.clientService.deleteuser(client);
}
search(){
  
}
Details(client:Client){

this.fullname=("  Full Name  :"+client.firstName+"  "+client.lastName );
this.email=(" Email   :"+client.email);
this.number=("  Phone number  :"+client.phoneNumber );
if(client.valid ===true){

  this.status=("  Account status   : blocked");
}else{

this.status=("  Account status   : activated" );
}
this.role=("  Role  :"+client.role);
this.addess=("Adress : "+client.adress);





}
}
