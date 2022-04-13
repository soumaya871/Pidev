import { Component, OnInit } from '@angular/core';
import { Pipe } from 'node:stream';
import { Bill } from '../../model/Bill';
import {BillsService} from '../../service/bills.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  Bills:Bill[];
  billId:number;
  billT:string;
  submitted=false;
  bill:Bill = new Bill();
  typeBill :any = [{id:'Automatic',Name:'Automatic'},{id:'Manual',Name:'Manual'}];
  typebill:any;
  Bill:any = [{id:'Automatic',Name:'Automatic'},{id:'Manual',Name:'Manual'}];
  searchValue:string;
  
  constructor(public BillService:BillsService) { }

  ngOnInit(): void {
    
  
  this.BillService.getbills().subscribe((data:Bill[])=>{
    console.log(data);
    this.Bills=data;
  })
/*  this.registerForm = this.formBuilder.group({
    Type: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      totalprice: ['', [Validators.required]]
  });*/
}
getbill(){
this.BillService.getbills().subscribe((data:Bill[])=>{
console.log(data);
this.Bills=data;
})}
deletebill(id:number){
this.BillService.deletebill(id).subscribe();
 
}

newBill(): void {
this.submitted = false;
this.bill = new Bill();
}

save() {
this.BillService.addbill(this.bill).subscribe(data => {
  console.log(data)
  this.bill = new Bill();
this.gotoList();
}, 
error => console.log(error));
}

onSubmit() {
this.submitted = true;
this.save();    
}


gotoList() {
this.getbill();

}
selecttype(){

}
}
