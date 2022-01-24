import { CardioExcercise } from "./cardio-excercise";
import { Workout } from "./workout";

export class CardioTraining {
  id: number;
  name: string | undefined;
  distance: number | undefined;
  scale: string | undefined;
  workout: Workout | undefined;
  cardioExcercise: CardioExcercise | undefined;

constructor(id: number = 0, name?: string, distance?: number, scale?: string, workout?: Workout, cardioExcercise?: CardioExcercise){
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.scale = scale;
    this.workout = workout;
    this.cardioExcercise = cardioExcercise;
}

}
