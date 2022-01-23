import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightExerciseComponent } from './weight-exercise.component';

describe('WeightExerciseComponent', () => {
  let component: WeightExerciseComponent;
  let fixture: ComponentFixture<WeightExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
