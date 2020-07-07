import { TestBed } from '@angular/core/testing';

import { ForShopService } from './for-shop.service';

describe('ForShopService', () => {
  let service: ForShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
