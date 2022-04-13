import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({ providedIn: 'root'})
export class ClientService {
  constructor(private http: HttpClient) { }
 getClientList():Observable<Client[]>{
   return this.http.get<Client[]>(`http://localhost:8081/retrieve-all-clients`);
 }
 createClient(client:Client):Observable<Client>{
   return this.http.post<Client>(`http://localhost:8081/sign-up/client`, client);

 }
 deleteuser(client:Client){
   return this.http.put(`http://localhost:8081/client/desactivate-account/{client-id}`,client);
 }
}