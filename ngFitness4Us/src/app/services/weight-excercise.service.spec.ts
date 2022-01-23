import { TestBed } from '@angular/core/testing';

import { WeightExcerciseService } from './weight-excercise.service';

describe('WeightExcerciseService', () => {
  let service: WeightExcerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightExcerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
