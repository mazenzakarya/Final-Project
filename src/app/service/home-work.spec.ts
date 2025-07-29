import { TestBed } from '@angular/core/testing';

import { HomeWork } from './home-work';

describe('HomeWork', () => {
  let service: HomeWork;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeWork);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
