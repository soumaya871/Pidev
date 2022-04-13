import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/model/seller';
import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller-resgistration',
  templateUrl: './seller-resgistration.component.html',
  styleUrls: ['./seller-resgistration.component.css']
})
export class SellerResgistrationComponent implements OnInit {
  seller : Seller = new Seller();
  constructor(private sellerService : SellerService , 
    private router :Router) { }

  ngOnInit(): void { 
    this.seller=new Seller();
  }
  saveseller(){
    this.sellerService.createSeller(this.seller).subscribe(data=>{
      console.log(data);
    });
  }

  OnSubmit(){
    this.saveseller();
    console.log(this.seller);
    
    
  }
}
