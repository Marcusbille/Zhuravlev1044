import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ForShopService } from 'src/app/shared/services/for-shop.service'
import { Tovar, TovarSection } from 'src/app/shared/models/mebel_'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  id: number;
  thing: Tovar;
  goodsSection = TovarSection;
  thingForm: FormGroup;
  constructor(private activateRoute: ActivatedRoute, private shopService: ForShopService, private router: Router) {
    this.activateRoute.params.subscribe((p) => {
      if (!isNullOrUndefined(p.id)) {
        this.id = +p.id;
      } else {
        this.id = null;
      }

    });
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let thing = this.shopService.getOneById(this.id);
        this.thing = await thing;
      } catch (err) {
        console.log(err);
      }
      this.thingForm.patchValue({
        name: this.thing.name,
        surname: this.thing.manufacturer,
        artic: this.thing.artic,
        quantity: this.thing.quantity,
        price: this.thing.price,
        manufacturer: this.thing.manufacturer,
        category: this.thing.category,
        weight: this.thing.weight,
      });
    }
  }

  async onDelete() {
    try {
      await this.shopService.deleteOneById(this.id);
    } catch (err) {
      console.log(err);
    }
    this.router.navigate(['/thing']);
  }

  async onSave() {
    let data = this.thingForm.value;
    console.log(data);
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.shopService.putOne(this.id, data);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let res = await this.shopService.postOne(data);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (err) {
        console.log(err);
      }
    }
  }

  ngOnInit(): void {
    this.thingForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      artic: new FormControl(null, [Validators.required]),
      manufacturer: new FormControl(null, [Validators.required]),
    });
    this.getData();
  }

}
