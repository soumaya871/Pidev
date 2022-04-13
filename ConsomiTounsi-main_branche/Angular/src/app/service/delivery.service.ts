import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../model/Delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private baseUrl="http://localhost:8084/getDeliveries";
  private Url=" http://localhost:8084/passDelivery";
  private a="http://localhost:8084/Remove-Delivery";
 // private b="http://localhost:8084/affectDeliveryToNearestDeliveryMen";

  constructor(private http:HttpClient  ) { }

  getDeliveries():Observable<Delivery[]>{
    return this.http.get<Delivery[]>(`${this.baseUrl}`);
  }
  
  passDelivery(Delivery:Object):Observable<Object>{
    return this.http.post(`${this.Url}`,Delivery);
  }
  DeleteDelivery(id:number):Observable<any>{
    return this.http.delete(`${this.a}/${id}`,{responseType:`text`});
  }
  AffectDeliveryToNearestDeliveryMen(id:number):Observable<any>{
    return this.http.post("http://localhost:8084/affectDeliveryToNearestDeliveryMen",id);
  }
}