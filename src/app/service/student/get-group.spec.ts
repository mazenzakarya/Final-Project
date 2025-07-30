import { TestBed } from '@angular/core/testing';

import { GetGroup } from './get-group';

describe('GetGroup', () => {
  let service: GetGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGroup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
