import { Injectable } from '@angular/core';
import { Basement } from './basement';
//  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForShopService extends Basement {

  constructor(public http: HttpClient) {
    super(http, 'goods');
  }
}
