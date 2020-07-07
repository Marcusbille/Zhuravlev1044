import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'catFilter'
})
export class CategoryPipe implements PipeTransform {

  transform(goods: any[], sortWith: string): any[] {
    if (!isNullOrUndefined(sortWith)) {
      switch (sortWith) {

        case "Mebel":
          return goods.filter((thing) => {
            return thing.category == 0;
          });

        case "Tetch":
          return goods.filter((thing) => {
            return thing.category == 1;
          });

        case "Books":
          return goods.filter((thing) => {
            return thing.category == 2;
          });


        case "Phones":
          return goods.filter((thing) => {
            return thing.category == 3;
          });
        case "All":
          return goods;

        default:
          break;
      }
    }
    else {
      return goods;
    }
  }

}
