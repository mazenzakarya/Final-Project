import { TestBed } from '@angular/core/testing';

import { AiChats } from './ai-chats';

describe('AiChats', () => {
  let service: AiChats;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiChats);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
