import { TestBed } from '@angular/core/testing';

import { MyGroupe } from './my-groupe';

describe('MyGroupe', () => {
  let service: MyGroupe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGroupe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
