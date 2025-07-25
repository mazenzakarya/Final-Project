import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeWork } from './add-home-work';

describe('AddHomeWork', () => {
  let component: AddHomeWork;
  let fixture: ComponentFixture<AddHomeWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHomeWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHomeWork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
