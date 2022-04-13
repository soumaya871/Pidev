import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {
  product:Product= new Product();
  id:number;
  constructor(private productService:ProductService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data=>{
this.product=data;
    },error=>console.log(error));
  }

  gotoProductList(){
    this.router.navigate(["/Listprod"]);
  }
  onSubmit(){
    this.productService.updateProduct(this.id,this.product).subscribe(data=>{
     this.gotoProductList();
    },error=>console.log(error))
  }
}
