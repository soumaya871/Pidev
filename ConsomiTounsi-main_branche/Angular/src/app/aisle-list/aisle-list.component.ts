import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AisleService } from '../aisle.service';

import { MailingService } from '../mailing.service';
import { Aisles } from '../model/Aisles';
import { Mail } from '../send-mail/mail';

@Component({
  selector: 'app-aisle-list',
  templateUrl: './aisle-list.component.html',
  styleUrls: ['./aisle-list.component.css']
})
export class AisleListComponent implements OnInit {
  aisle: Aisles[];
  mail: Mail = new Mail()
  constructor(private aisleService: AisleService,
              private router: Router,
              private mailingService:MailingService) { }

    



  ngOnInit(): void {
    this.getAisle();
    this.mail.name = "said"
    this.mail.email = "saidsaidsaid123456789012@gmail.com"
    this.mail.feedback = ""
  }

  private getAisle(){
    this.aisleService.getAisleList().subscribe(data =>{
      this.aisle=data;
    });
  }

  updateAisle(id: number){
    this.router.navigate(['update-aisle', id])
  }
  deleteAisle(id: number){
    this.aisleService.deleteAisle(id).subscribe(data=> {
      console.log(data)
      this.getAisle()
    })
  }

  aisleDetails(id : number){
    this.router.navigate(['aisle-details', id])
  }

  
  saveMail(){
    this.mailingService.createMail(this.mail).subscribe(data =>{
      console.log(data)
      
    },
    error => console.log(error))
  }
  sendemail(){
    console.log(this.mail)
    this.saveMail()
  }


  
}
