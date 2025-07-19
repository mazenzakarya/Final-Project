import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetemployeeRep } from './getemployee-rep';

describe('GetemployeeRep', () => {
  let component: GetemployeeRep;
  let fixture: ComponentFixture<GetemployeeRep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetemployeeRep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetemployeeRep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
