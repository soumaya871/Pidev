import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AisleService } from '../aisle.service';

import { Aisles } from '../model/Aisles';
import { Product } from '../model/Product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-aisle-details',
  templateUrl: './aisle-details.component.html',
  styleUrls: ['./aisle-details.component.css']
})
export class AisleDetailsComponent implements OnInit {
  id: number
  aisle: Aisles
  product: Product[]
  aisles: any
  


  constructor(private route: ActivatedRoute,
              private aisleService: AisleService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.aisle = new Aisles()
    this.aisleService.getAisleById(this.id).subscribe(data =>{
      this.aisle= data
    })

    this.getList();
    
  }
  private getList(){
    this.productService.getProductList().subscribe(data=>{
      this.product=data;
    })
  }

}
