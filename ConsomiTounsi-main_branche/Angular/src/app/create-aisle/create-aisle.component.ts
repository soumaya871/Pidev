import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AisleService } from '../aisle.service';
import { Aisles } from '../model/Aisles';


@Component({
  selector: 'app-create-aisle',
  templateUrl: './create-aisle.component.html',
  styleUrls: ['./create-aisle.component.css']
})
export class CreateAisleComponent implements OnInit {
  aisle: Aisles =new Aisles()
  constructor(private aisleService: AisleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAisle(){
    this.aisleService.createAisle(this.aisle).subscribe(data =>{
      console.log(data)
      this.goToAisleList()
    },
    error => console.log(error))
  }

  goToAisleList(){
    this.router.navigate(['Aisles'])
  }
onSubmit2(){
  console.log(this.aisle)
  this.saveAisle()
}





}
