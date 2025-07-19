import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gethomework } from './gethomework';

describe('Gethomework', () => {
  let component: Gethomework;
  let fixture: ComponentFixture<Gethomework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gethomework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gethomework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
