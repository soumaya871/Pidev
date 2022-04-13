import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeliveryAgent } from '../model/DeliveryAgent';


@Injectable({
  providedIn: 'root'
})
export class DeliveryAgentService {

  private baseUrl="http://localhost:8084/getDeliveryMen";
  private Url=" http://localhost:8084/addDeliveryMan";
  private a="http://localhost:8084/Remove-del";
  private b="http://localhost:8084/BestLivreur";
  private c=" http://localhost:8084/deliverydispo";

  constructor(private http:HttpClient  ) { }

  getDeliveryMen():Observable<DeliveryAgent[]>{
    return this.http.get<DeliveryAgent[]>(`${this.baseUrl}`)
  }
  CreateDeliveryAgent(DeliveryAgent:Object):Observable<Object>{
    return this.http.post(`${this.Url}`,DeliveryAgent);
  }
  DeleteDeliveryAgent(id:number):Observable<any>{
    return this.http.delete(`${this.a}/${id}`,{responseType:`text`});
  }
  BestLivreur():Observable<DeliveryAgent[]>{
    return this.http.get<DeliveryAgent[]>(`${this.b}`);
  }
  Livreurdispo():Observable<DeliveryAgent[]>{
    return this.http.get<DeliveryAgent[]>(`${this.c}`);
  }
}