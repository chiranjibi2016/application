import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    sortNumber=function(a,b){
      return a-b;
    }
  transform(value: any[], args?: any): any {
    if(args==='ascending'){
      return value.sort(this.sortNumber);
    }
    else if(args==='descending'){
      return value.sort(this.sortNumber).reverse();
    }
  }
}
