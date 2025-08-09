import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAiChat } from './public-ai-chat';

describe('PublicAiChat', () => {
  let component: PublicAiChat;
  let fixture: ComponentFixture<PublicAiChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicAiChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicAiChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
