import { Component, OnInit } from '@angular/core';
import { Tovar, TovarSection } from 'src/app/shared/models/mebel_'
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { ForShopService } from 'src/app/shared/services/for-shop.service'
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private shopService: ForShopService, private router: Router) { }
  checked = false;
  quantity: number;
  goods: Tovar[] = [];
  goodsSection = TovarSection;
  goodsSectionCount = Object.keys(this.goodsSection);
  searchStr = "";
  reversedPrice = false;
  reversedQuantity = false;
  sortBy: string;
  category: string;


  ngOnInit(): void {
    this.goodsSectionCount = this.goodsSectionCount.slice(0, this.goodsSectionCount.length / 2);
    for (let index of this.goodsSectionCount) {
      this.goodsSectionCount[index] = Number(this.goodsSectionCount[index]);
    }
    this.getData();
  }

  async getData() {
    try {
      let goods = this.shopService.getAll();
      this.goods = isNullOrUndefined(await goods) ? [] : await goods;
    }
    catch (err) {
      console.log(err);
    }
  }
  more(thing) {
    thing.quantity++;
    this.shopService.putOne(thing.id, thing);
    this.getAll();
  }
  less(thing) {
    thing.quantity--;
    this.shopService.putOne(thing.id, thing);
    this.getAll();
  }
  getAll() {
    return this.goods;
  }

  getCategory(thing) {
    switch (thing.category) {
      case 0: this.category = "Мебель";
        return this.category;
      case 1: this.category = "Техника";
        return this.category;
      case 2: this.category = "Книги";
        return this.category;
      case 3: this.category = "Телефоны";
        return this.category;

    }
  }

  onAddThing() {
    this.router.navigate([this.router.url, 'thing']);
  }
  onEditThing(id: number) {
    this.router.navigate([this.router.url, 'thing', id]);
  }

  async onDelete(id: number) {
    try {
      await this.shopService.deleteOneById(id);
    } catch (err) {
      console.log(err);
    }
    this.getData();
  }

}
