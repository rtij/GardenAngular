import { TestBed } from '@angular/core/testing';

import { VueEntrerService } from './vue-entrer.service';

describe('VueEntrerService', () => {
  let service: VueEntrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VueEntrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
