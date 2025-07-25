import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHomeWork } from './get-home-work';

describe('GetHomeWork', () => {
  let component: GetHomeWork;
  let fixture: ComponentFixture<GetHomeWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetHomeWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetHomeWork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
