import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtokenService {

  constructor(private httpClient: HttpClient) { }
  public generateToken(request: any) {
    
    return this.httpClient.post<string>("http://localhost:8081/authenticate", request, {  responseType: 'text' as 'json' });
  }
  
  
  public welcome(token: any) {
    let tokenStr = 'Bearer '+token;
    const headers = new HttpHeaders().set('Authorization', "Bearer "+token);
    return this.httpClient.get<string>("http://localhost:8081/welcome", {headers, responseType: 'text' as 'json' });
  }
  }
  

