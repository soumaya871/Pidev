import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stocks } from '../model/stocks';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  stockk: Stocks = new Stocks();
  constructor(private StockService: StockService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savestock(){
    this.StockService.createStock(this.stockk).subscribe(data =>{
      console.log(data)
      this.goToStockList()
    },
    error => console.log(error))
  }

  goToStockList(){
    this.router.navigate(['stocks'])
  }
onSubmit(){
  console.log(this.stockk)
  this.savestock()
}


}
