import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stocks } from '../model/stocks';
import { StockService } from '../service/stock.service';


@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  id: number
  stock: Stocks
  constructor(private route: ActivatedRoute,
              private stockService: StockService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.stock = new Stocks()
    this.stockService.getStockById(this.id).subscribe(data =>{
      this.stock= data
    })

  }

}
