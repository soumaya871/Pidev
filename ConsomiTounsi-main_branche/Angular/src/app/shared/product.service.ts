import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from '../model/Ad';
import { Product } from '../model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl="http://localhost:8084/remove-Product";
private baseURL="http://localhost:8084/deletePublicite";
  private url="http://localhost:8084/retrieve-Product";
  private x="http://localhost:8084/product/verif";
  private  modify="http://localhost:8084/modify-Product";
  private ad="http://localhost:8084/update";
  private rad="http://localhost:8084/retrieve-Ad";
constructor(private http:HttpClient) { }
  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]> ("http://localhost:8084/retrieve-all-Products");
  }
  
  getListAd():Observable<Ad[]>{
    return this.http.get<Ad[]>(" http://localhost:8084/retrieve-all-Ads");
  }
  createProduct(product:Product):Observable<any>{
return this.http.post("http://localhost:8084/addProduct",product);
  }
  createAd(ad:Ad):Observable<Object>{
    return this.http.post("http://localhost:8084/ajouterPub",ad);
   }



   getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
  }
  updateProduct(id:number,product:Product):Observable<any>{
    return this.http.put(`${this.modify}`,product)
  }
 deleteProduct(id:number):Observable<any>{
   return this.http.delete(`${this.baseUrl}/${id}`)
 }
 deleteAd(id:number):Observable<any>{
   return this.http.delete(`${this.baseURL}/${id}`);
 }
 
 getadById(id:number):Observable<Ad>{
  return this.http.get<Ad>(`${this.rad}/${id}`);
}
updateAd(id:number,ad:Ad){
  return this.http.put(`${this.ad}`,ad)
}


 verification(id:number,product: Product):Observable<any>{
   return this.http.put(`${this.x}/${id}`,product);
 }

}





 

