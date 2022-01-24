import { CardioExcercise } from "./cardio-excercise";
import { WeightExcercise } from "./weight-excercise";

export class Images {
  id: number;
  title: string | undefined;
  description: string | undefined;
  url: string | undefined;
  weightExcercise: WeightExcercise | undefined;
  cardioExcercise: CardioExcercise | undefined;
  constructor(id: number = 0, title?: string, description?: string, url?: string, weightExcercise?: WeightExcercise, cardioExcercise?: CardioExcercise) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.weightExcercise = weightExcercise;
    this.cardioExcercise = cardioExcercise;
  }
}
