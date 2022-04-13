import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Aisles } from './model/Aisles';



@Injectable({
  providedIn: 'root'
})
export class AisleService {
  private baseaURL = "http://localhost:8084/Aisles";
  constructor(private httpClient: HttpClient) { }

  getAisleList():Observable<Aisles[]>{
    return this.httpClient.get<Aisles[]>(this.baseaURL)
  }
   
    createAisle(aisle: Aisles):Observable<Object>{
      return this.httpClient.post(`${this.baseaURL}`, aisle)
    }
  
    getAisleById(id: number): Observable<Aisles>{
      return this.httpClient.get<Aisles>(`${this.baseaURL}/${id}`)
    }
    updateAisle(id: number, aisle: Aisles ):Observable<Object>{
      return this.httpClient.put(`${this.baseaURL}/${id}`, aisle)
    }
  
    deleteAisle(id: number):Observable<Object>{
      return this.httpClient.delete(`${this.baseaURL}/${id}`)
    }
}
