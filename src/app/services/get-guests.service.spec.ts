import { TestBed } from '@angular/core/testing';

import { GetGuestsService } from './get-guests.service';

describe('GetGuestsService', () => {
  let service: GetGuestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGuestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
