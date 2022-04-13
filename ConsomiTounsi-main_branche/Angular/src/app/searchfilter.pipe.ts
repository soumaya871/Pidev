import { Pipe, PipeTransform } from '@angular/core';
import{Bill} from './model/Bill';
@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Bills: Bill[], searchValue:string): Bill[] {
   if(!Bills || !searchValue){
     return Bills;
   }
   
   
    return Bills.filter(bill=>
       bill.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
       bill.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
       
       );
  }

}
