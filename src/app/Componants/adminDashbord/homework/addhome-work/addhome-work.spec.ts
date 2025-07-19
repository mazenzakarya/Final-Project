import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhomeWork } from './addhome-work';

describe('AddhomeWork', () => {
  let component: AddhomeWork;
  let fixture: ComponentFixture<AddhomeWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddhomeWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhomeWork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
