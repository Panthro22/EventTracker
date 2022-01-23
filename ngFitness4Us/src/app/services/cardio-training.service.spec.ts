import { TestBed } from '@angular/core/testing';

import { CardioTrainingService } from './cardio-training.service';

describe('CardioTrainingService', () => {
  let service: CardioTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardioTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
