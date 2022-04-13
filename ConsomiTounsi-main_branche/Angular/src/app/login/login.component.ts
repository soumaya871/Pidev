import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client';
import { JwtokenService } from '../service/jwtoken.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private userName : String ; 
private password : String ; 
client =new Client() ; 
response:any;
  constructor(private router:Router , private service : JwtokenService ) { }

  ngOnInit() {
   
    
  }

  public getAccessToken(client:Client){
  
        let resp=this.service.generateToken(client);
        resp.subscribe(data=>this.accessApi(data));
     
    
  }
  
  public accessApi(token:String){
    const index=token.indexOf(",");
   const role=this.client.role=token.slice(0,index);
    const jwt=token.slice(index+1,token.length);
    let resp=this.service.welcome(jwt);
    resp.subscribe(data=>this.response=data);
    if (role.includes("SELLER")){
      this.router.navigateByUrl("/SELLER");
    }else if (role.includes("CLIENT")){
      this.router.navigateByUrl("/CLIENT");
    }else if (role.includes("ADMIN")){
      this.router.navigateByUrl("/ADMIN");
    }else {
      this.router.navigateByUrl("/DELIVERYAGENT");
    }

  }
  
  login() {    
     this.getAccessToken(this.client);
  
  }
  backtoHome(){
    this.router.navigateByUrl("/home")
  }
   
}
