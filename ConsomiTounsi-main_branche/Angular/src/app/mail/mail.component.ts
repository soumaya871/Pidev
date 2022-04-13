import { Component, OnInit } from '@angular/core';
import { mail } from '../model/mail';
import { MailService } from '../shared/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  mail:mail=new mail();
  constructor(private mailService:MailService) { }

  ngOnInit(): void {
  }

}
