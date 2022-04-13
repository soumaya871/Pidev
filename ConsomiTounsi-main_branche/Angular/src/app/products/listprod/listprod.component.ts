import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aisles } from 'src/app/model/Aisles';
import { mail } from 'src/app/model/mail';
import { Product } from 'src/app/model/Product';
import { MailService } from 'src/app/shared/mail.service';
import { ProductService } from 'src/app/shared/product.service';


@Component({
  selector: 'app-listprod',
  templateUrl: './listprod.component.html',
  styleUrls: ['./listprod.component.css']
})
export class ListprodComponent implements OnInit {
 products: Product[];
 message: string;
 searchValue:string;
mail:mail=new mail();
  constructor(private router:Router,private mailservice:MailService,private http:HttpClient,private productService:ProductService) { }


  ngOnInit(): void {
    this.getProduct();

    this.http.get('http://localhost:8084/retrieve-all-Products').subscribe((result :any)=>{
      this.products=result;
    });
    this.mail.name = "rihab" 
        this.mail.email = "verif@gmail.com"
        this.mail.feedback = "" 
      }
      private getProduct(){
        this.productService.getProductList().subscribe(data=>{
              this.products=data;
              console.log('********products: ', this.products);
        })
      }
    go(){
      this.router.navigate(["/Createprod"])
    }
    updateProduct(id:number){
    this.router.navigate(["updateProd",id])
    }
    deleteProduct(id:number){
      this.productService.deleteProduct(id).subscribe(data=>{
       console.log(data);
        this.getProduct();
      })
    }
    verification(id:number,product: Product){
    this.productService.verification(id,product).subscribe(response=>{
     
      if (response.status === 200) {
        this.message = 'product verify successfully';
      
      } else {
        this.message = 'product not verify successfully';
      }
    
    })
    }
    saveMailProd(){
      this.mailservice.createMail(this.mail).subscribe(data =>{
        console.log(data)   
      },
      error => console.log(error))
    }
    sendmailProd(){
      console.log(this.mail)
      this.saveMailProd()
     
    }
    
    }