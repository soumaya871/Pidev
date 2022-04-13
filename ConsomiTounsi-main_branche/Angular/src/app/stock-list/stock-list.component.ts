import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stocks } from '../model/stocks';
import { StockService } from '../service/stock.service';



@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stock: Stocks[];

  constructor(private stockService: StockService, 
              private router: Router) { }

  ngOnInit(): void {
   this.getStock();
  }

  private getStock(){
    this.stockService.getStockList().subscribe(data =>{
      this.stock=data;
    });
  }

  updateStock(id: number){
    this.router.navigate(['update-stock', id])
  }
  deleteStock(id: number){
    this.stockService.deleteStock(id).subscribe(data=> {
      console.log(data)
      this.getStock()
    })
  }

  stockDetails(id : number){
    this.router.navigate(['stock-details', id])
  }
}
