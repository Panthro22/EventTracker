import { Component, OnInit } from '@angular/core';
import { CardioExcercise } from 'src/app/models/cardio-excercise';
import { CardioTraining } from 'src/app/models/cardio-training';
import { Workout } from 'src/app/models/workout';
import { CardioExcerciseService } from 'src/app/services/cardio-excercise.service';
import { CardioTrainingService } from 'src/app/services/cardio-training.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-cardio-exercise',
  templateUrl: './cardio-exercise.component.html',
  styleUrls: ['./cardio-exercise.component.css']
})
export class CardioExerciseComponent implements OnInit {
  newCardioExercise = new CardioExcercise();
  cardioExercises: CardioExcercise[] =[];
  selectedCardioEx: CardioExcercise | null = null;
  editCardioEx: CardioExcercise | null = null;

  newCardioTraining = new CardioTraining();
  cardioTrainings: CardioTraining[] =[];
  selectedCardioTrain: CardioTraining | null = null;

  newWorkout = new Workout();


  constructor(private cardioExSvc: CardioExcerciseService,
              private cardioTrainSvc: CardioTrainingService,
              private workoutSvc: WorkoutService) { }

  ngOnInit(): void {
    this.loadCardioEx();
    //this.loadCardioTrain();
  }
  setCardioEx(cardioEx: CardioExcercise) {
    this.selectedCardioEx = cardioEx;
  }

  loadCardioEx() {
    this.cardioExSvc.index().subscribe(
      data => this.cardioExercises = data,

      err => console.error('Observer got an error ' + err)
    );
  }
  loadCardioTrain() {
    this.cardioTrainSvc.index().subscribe(
      data => this.cardioTrainings = data,

      err => console.error('Observer got an error ' + err)
    );
  }

  createCardioExcercise(cardioEx: CardioExcercise) {
    this.cardioExSvc.create(cardioEx).subscribe(
      data => {
        this.loadCardioEx();
        this.newCardioExercise = new CardioExcercise();
      },
      err => console.error('Observer got an error ' + err)
    );
  }
  destroy(cardioEx: CardioExcercise) {
    this.cardioExSvc.destroy(cardioEx).subscribe({
      next: () => {
        this.loadCardioEx();
      },
      error: (err) => {
        console.log('CardioExcerciseComponent.destroy(): error' + err);
      },
    });
  }
  setEditCardioEx(){
    this.editCardioEx = Object.assign({}, this.selectedCardioEx);
  }
  updateCardioEx(cardioExercise: CardioExcercise, goToDetails = true) {
    this.cardioExSvc.update(cardioExercise).subscribe({
      next: (cardioExercise) => {
        this.editCardioEx = null;
        if(goToDetails){
          this.selectedCardioEx = cardioExercise;
        }
        this.loadCardioEx();
      },
      error: (err) => {
        console.log('TodoListComponent.updateTodo(); error' + err);
      },
    });
  }
}

