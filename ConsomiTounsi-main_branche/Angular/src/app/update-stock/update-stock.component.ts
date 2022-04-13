import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stocks } from '../model/stocks';
import { StockService } from '../service/stock.service';



@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  stockk: Stocks = new Stocks();
  id:number
  constructor(private StockService: StockService ,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.StockService.getStockById(this.id).subscribe(data =>{
      this.stockk=data},
      error => console.log(error))
     }

  goToStockList(){
    this.router.navigate(['stocks'])
  }
onSubmit(){
  this.StockService.updateStock(this.id, this.stockk).subscribe(data =>{
    this.goToStockList()
  },
  error => console.log(error))
}

}
