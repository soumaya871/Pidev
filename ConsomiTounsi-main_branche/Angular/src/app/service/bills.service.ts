import { Injectable } from '@angular/core';
import{Bill}from'../model/Bill';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  private b="http://localhost:8084/getbills";
  private a="http://localhost:8084/remove-bill";
  private p="http://localhost:8084/add-bill";
 
  constructor(private http:HttpClient) { }
 
 
getbills():Observable<Bill[]>{
    return this.http.get<Bill[]>(`${this.b}`);    
}
deletebill(id:number):Observable<any>{
  {
    return this.http.delete(`${this.a}/${id}`,{responseType:`text`});
  }}
addbill(bill:Object):Observable<Object>{
    return this.http.post(`${this.p}`,bill);
  }


}


