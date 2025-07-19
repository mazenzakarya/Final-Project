import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userdetials } from './userdetials';

describe('Userdetials', () => {
  let component: Userdetials;
  let fixture: ComponentFixture<Userdetials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userdetials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userdetials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
