import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttend } from './employee-attend';

describe('EmployeeAttend', () => {
  let component: EmployeeAttend;
  let fixture: ComponentFixture<EmployeeAttend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAttend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAttend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
