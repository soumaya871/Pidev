import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AisleService } from '../aisle.service';
import { Aisles } from '../model/Aisles';


@Component({
  selector: 'app-update-ailse',
  templateUrl: './update-ailse.component.html',
  styleUrls: ['./update-ailse.component.css']
})
export class UpdateAilseComponent implements OnInit {
  aisle: Aisles= new Aisles();
  id: number
  constructor(private aisleService: AisleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.aisleService.getAisleById(this.id).subscribe(data =>{
      this.aisle=data},
      error => console.log(error))
  }

  goToAisleList(){
    this.router.navigate(['Aisles'])
  }
  onSubmit2(){
  this.aisleService.updateAisle(this.id, this.aisle).subscribe(data =>{
    this.goToAisleList()
  },
  error => console.log(error))
}


}
