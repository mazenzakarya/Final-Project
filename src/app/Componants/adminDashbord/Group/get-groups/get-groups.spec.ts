import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGroups } from './get-groups';

describe('GetGroups', () => {
  let component: GetGroups;
  let fixture: ComponentFixture<GetGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
