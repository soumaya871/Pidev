import { Component, OnInit } from '@angular/core';
import { Mail } from './mail';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  mail: Mail = new Mail()
  constructor() { }

  ngOnInit(): void {
  }
  
}
