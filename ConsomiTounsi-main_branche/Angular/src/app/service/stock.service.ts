import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Stocks } from '../model/stocks';





@Injectable({
  providedIn: 'root'
})
export class StockService {
  private basestockURL = "http://localhost:8084/stocks";
  
  
  constructor(private httpClient: HttpClient) { }

  getStockList():Observable<Stocks[]>{
    return this.httpClient.get<Stocks[]>(this.basestockURL)
  }
 
  createStock(stock: Stocks):Observable<Object>{
    return this.httpClient.post(`${this.basestockURL}`, stock)
  }

  getStockById(id: number): Observable<Stocks>{
    return this.httpClient.get<Stocks>(`${this.basestockURL}/${id}`)
  }
  updateStock(id: number, stock: Stocks):Observable<Object>{
    return this.httpClient.put(`${this.basestockURL}/${id}`, stock)
  }

  deleteStock(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.basestockURL}/${id}`)
  }

  }

