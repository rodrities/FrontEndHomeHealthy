import { TestBed } from '@angular/core/testing';

import { HttpCollaboratorsDataService } from './http-collaborators-data.service';

describe('HttpCollaboratorsDataService', () => {
  let service: HttpCollaboratorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCollaboratorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
