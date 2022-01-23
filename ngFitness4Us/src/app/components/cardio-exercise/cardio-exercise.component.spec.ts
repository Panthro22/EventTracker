import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioExerciseComponent } from './cardio-exercise.component';

describe('CardioExerciseComponent', () => {
  let component: CardioExerciseComponent;
  let fixture: ComponentFixture<CardioExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
