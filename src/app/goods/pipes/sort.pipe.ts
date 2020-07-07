import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(goods: any[], sortBy: string): any[] {
    if (!isNullOrUndefined(sortBy)) {
      if (!sortBy.includes('Reversed')) {
        return goods.sort(this.byField(sortBy));
      } else {
        sortBy = sortBy.slice(0, sortBy.indexOf('Reversed'))
        return goods.sort(this.reversedByField(sortBy));
      }
    } else
      return goods;
  }

  byField(field: string) {
    return (a, b) => a[field] - b[field];
  }

  reversedByField(field) {
    return (a, b) => b[field] - a[field];
  }
}

