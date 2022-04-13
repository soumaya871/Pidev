import { Component, OnInit } from '@angular/core';
import { JwtokenService } from '../service/jwtoken.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
authRequest:any ={
  
    "userName":"user22",
    "password":"pass"
   };
   response:any;
  

  constructor(private service : JwtokenService) { }

  ngOnInit() {
  }
    }


