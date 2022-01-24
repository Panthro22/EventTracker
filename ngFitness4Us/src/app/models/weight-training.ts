import { WeightExcercise } from "./weight-excercise";
import { Workout } from "./workout";

export class WeightTraining {
  id: number;
  name: string | undefined;
  repetitions: number | undefined;
  sets: number | undefined;
  weight: number | undefined;
  scale: string | undefined;
  workout: Workout | undefined;
  weightExcercise: WeightExcercise | undefined;

  constructor(id: number = 0, name?: string, repetitions?: number, sets?: number, weight?: number, scale?: string, workout?: Workout, weightExcercise?: WeightExcercise) {
    this.id = id;
    this.name = name;
    this.repetitions = repetitions;
    this.sets = sets;
    this.weight = weight;
    this.scale = scale;
    this.workout = workout;
    this.weightExcercise = weightExcercise;
  }
}
