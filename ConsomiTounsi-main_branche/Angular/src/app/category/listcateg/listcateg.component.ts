import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/model/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcateg',
  templateUrl: './listcateg.component.html',
  styleUrls: ['./listcateg.component.css']
})
export class ListcategComponent implements OnInit {
categorys:Category[];
  constructor(private categService:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.getCateg();
  }
private getCateg(){
  this.categService.getCategList().subscribe(data =>{
      this.categorys=data;})
}

  deleteCateg(id:number){
    this.categService.deleteCateg(id).subscribe(data=>{
     console.log(data);
      this.getCateg();
    })
  
  }
}
