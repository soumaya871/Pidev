import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../model/seller';

@Injectable({ providedIn: 'root'})
export class SellerService {
  constructor(private http: HttpClient) { }

 createSeller(seller:Seller):Observable<Seller>{
   return this.http.post<Seller>(`http://localhost:8081/sign-up/seller`,seller);

 }
}