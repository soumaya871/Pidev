import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mail } from '../model/mail';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  private urlmail='http://localhost:8084/mail/feedback'
  
  constructor(private httpClient:HttpClient) { }
  createMail(mail:mail):Observable<Object>{
    return this.httpClient.post(`${this.urlmail}`,mail);
  }
}
