import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttend } from './student-attend';

describe('StudentAttend', () => {
  let component: StudentAttend;
  let fixture: ComponentFixture<StudentAttend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAttend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAttend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
