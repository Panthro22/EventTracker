import { TestBed } from '@angular/core/testing';

import { DailyLogEntrieService } from './daily-log-entrie.service';

describe('DailyLogEntrieService', () => {
  let service: DailyLogEntrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyLogEntrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
