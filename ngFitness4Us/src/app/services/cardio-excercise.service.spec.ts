import { TestBed } from '@angular/core/testing';

import { CardioExcerciseService } from './cardio-excercise.service';

describe('CardioExcerciseService', () => {
  let service: CardioExcerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardioExcerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
