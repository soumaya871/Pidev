import { Component, OnInit } from '@angular/core';
import { Ad } from '../model/Ad';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
ads:Ad[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  this.getListad();
  }
private getListad(){
  this.productService.getListAd().subscribe(data=>{
    this.ads=data;})
}
}
