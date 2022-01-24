import { CardioExcercise } from "./cardio-excercise";
import { WeightExcercise } from "./weight-excercise";

export class Video {
  id: number;
  title: string | undefined;
  description: string | undefined;
  url: string | undefined;
  cardioExcercise: CardioExcercise | undefined;
  weightExcercise: WeightExcercise | undefined;

  constructor(id: number = 0, title?: string, description?: string, url?: string, cardioExcercise?: CardioExcercise, weightExcercise?: WeightExcercise) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.cardioExcercise = cardioExcercise;
    this.weightExcercise = weightExcercise;
  }
}
