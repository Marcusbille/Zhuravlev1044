import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yFilter'
})
export class YPipe implements PipeTransform {

  transform(goods: any[], checked: boolean): any[] {
    if (checked === false) {
      return goods;
    }
    else {
      let array = goods.filter((thing) => {
        return thing.quantity > 0;
      });
      return array;
    }
  }
}
