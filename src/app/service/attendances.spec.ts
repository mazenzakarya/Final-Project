import { TestBed } from '@angular/core/testing';

import { Attendances } from './attendances';

describe('Attendances', () => {
  let service: Attendances;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Attendances);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
