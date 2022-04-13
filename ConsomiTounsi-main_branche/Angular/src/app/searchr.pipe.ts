import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/Product';

@Pipe({
  name: 'searchr'
})
export class SearchrPipe implements PipeTransform {

  transform(Products: Product[],searchValue:string):Product[] {
    if(!Products || !searchValue){
      return Products;
    }
     return Products.filter(product=>
       product.product_name?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())||
       product.product_type?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())
       );
   }

}
