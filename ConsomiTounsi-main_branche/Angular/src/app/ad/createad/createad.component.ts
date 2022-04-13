import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from 'src/app/model/Ad';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-createad',
  templateUrl: './createad.component.html',
  styleUrls: ['./createad.component.css']
})
export class CreateadComponent implements OnInit {
ad: Ad=new Ad();
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  saveAd(){
    this.productService.createAd(this.ad).subscribe(data=>{
console.log(data);
this.gotoProductList();    
},
    error=>console.log(error));
  }
  gotoProductList(){
    this.router.navigate(["/Ad"]);
  }
  onSubmit(){
    console.log(this.ad)
    this.saveAd();
  }
  

}
