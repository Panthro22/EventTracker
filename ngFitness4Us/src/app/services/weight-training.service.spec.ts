import { TestBed } from '@angular/core/testing';

import { WeightTrainingService } from './weight-training.service';

describe('WeightTrainingService', () => {
  let service: WeightTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
