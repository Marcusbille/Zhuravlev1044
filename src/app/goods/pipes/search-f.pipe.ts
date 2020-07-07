import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFPipe implements PipeTransform {

  transform(goods: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return goods;
    } else {
      let array = searchStr.trim().split(' ');
      return goods.filter((thing) => {
        return (thing.name.toLowerCase().includes(array[0].toLowerCase()) || thing.artic.toLowerCase().includes(array[0].toLowerCase()));
      });
    }
  }
}




