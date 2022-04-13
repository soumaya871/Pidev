import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from './send-mail/mail';

@Injectable({
  providedIn: 'root'
})
export class MailingService {
  private baseMailURL = "http://localhost:8084/feedback"

  constructor(private httpClient: HttpClient) { }

  createMail(mail: Mail):Observable<Object>{
    return this.httpClient.post(`${this.baseMailURL}`,mail)
  }
}
