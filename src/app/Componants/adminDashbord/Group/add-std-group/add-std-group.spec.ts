import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStdGroup } from './add-std-group';

describe('AddStdGroup', () => {
  let component: AddStdGroup;
  let fixture: ComponentFixture<AddStdGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStdGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStdGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
