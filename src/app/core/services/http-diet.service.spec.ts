import { TestBed } from '@angular/core/testing';

import { HttpDietService } from './http-diet.service';

describe('HttpDietService', () => {
  let service: HttpDietService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDietService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
