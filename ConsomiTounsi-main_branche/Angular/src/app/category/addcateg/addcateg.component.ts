import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-addcateg',
  templateUrl: './addcateg.component.html',
  styleUrls: ['./addcateg.component.css']
})
export class AddcategComponent implements OnInit {
category:Category=new Category();
  constructor(private categService:CategoryService,private router:Router) { }

  ngOnInit(): void {
  }
saveCateg(){
  this.categService.Createcategory(this.category).subscribe(data=>{
    console.log(data);
  this.goToCategList();
  },error=>console.log(error));
}

goToCategList(){
  this.router.navigate(['/Listcateg']);
}
  onSubmit(){
    console.log(this.category);
    this.saveCateg();
  }
}
