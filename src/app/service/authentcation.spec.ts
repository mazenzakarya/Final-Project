import { TestBed } from '@angular/core/testing';

import { Authentcation } from './authentcation';

describe('Authentcation', () => {
  let service: Authentcation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authentcation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
