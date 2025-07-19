import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubject } from './get-subject';

describe('GetSubject', () => {
  let component: GetSubject;
  let fixture: ComponentFixture<GetSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSubject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
