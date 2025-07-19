import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addencome } from './addencome';

describe('Addencome', () => {
  let component: Addencome;
  let fixture: ComponentFixture<Addencome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addencome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addencome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
