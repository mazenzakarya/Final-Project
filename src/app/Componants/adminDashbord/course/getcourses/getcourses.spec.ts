import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getcourses } from './getcourses';

describe('Getcourses', () => {
  let component: Getcourses;
  let fixture: ComponentFixture<Getcourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getcourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getcourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
