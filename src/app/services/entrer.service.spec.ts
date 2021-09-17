import { TestBed } from '@angular/core/testing';

import { EntrerService } from './entrer.service';

describe('EntrerService', () => {
  let service: EntrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
