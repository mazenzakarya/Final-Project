import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGroupe } from './my-groupe';

describe('MyGroupe', () => {
  let component: MyGroupe;
  let fixture: ComponentFixture<MyGroupe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyGroupe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGroupe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
