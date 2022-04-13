import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/Complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  submitted=false;
  complaint:Complaint = new Complaint();
  Complaints:Complaint[];
  constructor( public complaintService :ComplaintService) { }

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
  
 
  onSubmit() {
  this.submitted = true;
  this.complaintService.addComplaint(this.complaint).subscribe(data => {
    console.log(data)
    this.complaint = new Complaint();
  this.gotoList();
  }, 
  error => console.log(error));   
  }
  
  
  gotoList() {
  this.getcomplaints();
  
  }
  deleteComplaints(id:number){
    this.complaintService.deleteComplaints(id).subscribe();
  }
  
  }