import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL="http://localhost:8081/admin/retrieve-all-clients"
  constructor(private http: HttpClient) { }
  public getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.baseURL}`);
  }
}


