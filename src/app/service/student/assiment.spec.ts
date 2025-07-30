import { TestBed } from '@angular/core/testing';

import { Assiment } from './assiment';

describe('Assiment', () => {
  let service: Assiment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assiment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
