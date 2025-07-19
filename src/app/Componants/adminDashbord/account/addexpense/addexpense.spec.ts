import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addexpense } from './addexpense';

describe('Addexpense', () => {
  let component: Addexpense;
  let fixture: ComponentFixture<Addexpense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addexpense]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addexpense);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
