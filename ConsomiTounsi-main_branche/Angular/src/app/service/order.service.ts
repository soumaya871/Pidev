import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../model/Order';
import { CartService } from './cart.service';
import { Cart } from '../model/cart';

import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public order:Order=new Order()
 //private baseUrl="http://localhost:8084/afficher";
  private getUrl="http://localhost:8084/delete/";
  private Url=" http://localhost:8081/SpringMVC/servlet/commandeParMois";
  private pdf="http://localhost:8081/SpringMVC/servlet/exportpdf";
  private lien="http://localhost:8081/SpringMVC/servlet/ajout";
  private stat=" http://localhost:8081/SpringMVC/servlet/commandeParMois"

  constructor(private http:HttpClient , private cartService:CartService) { }
  getOrder():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:8084/afficher");

  }
  deleteOrder(id:number):Observable<any>{
  {
    return this.http.delete(`${this.getUrl}/${id}`,{responseType:`text`});
  }}
CreateOrder( Cart:Cart[]){
  return new Promise(
    (resolve,reject)=>{
      Cart.forEach((data)=>{
        const price = data.number * data.product.product_price;

        const url = 
        + '&idProduct=' + data.product.id + '&quantity=' + data.number +
        '&price=' + data.product.product_price ;

        this.http.get(url).subscribe(
          (response: Data)=>{
            if(response.status == 200){
              this.cartService.removeElementOfCart(0);
              if(Cart.length == 0){
                resolve(true);
              }
            }else{
              reject(response.message);
            }
          },
          (error)=>{
            reject("Error : " + error);
          }
        )


      });//end foreach
    }
  )
}
}



