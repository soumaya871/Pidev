import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/Complaint';
import { ComplaintService } from '../service/complaint.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted=false;
  complaint:Complaint = new Complaint();
  Complaints:Complaint[];

  constructor(public complaintService :ComplaintService) { }

  ngOnInit(): void {
    this.getcomplaints();
  }
private getcomplaints(){
  this.complaintService.getComplaints().subscribe(data=>{
    this.Complaints=data;
  })
}

  newComplaint(): void {
    this.submitted = false;
    this.complaint = new Complaint();
    }
    
    save() {
    this.complaintService.addComplaint(this.complaint).subscribe(data => {
      console.log(data)
      this.complaint = new Complaint();
    this.gotoList();
    }, 
    error => console.log(error));
    }
    
    onSubmit() {
    this.submitted = true;
    this.save();    
    }
    
    
    gotoList() {
    this.getcomplaints();
    
    }
    
    }