import { CardioTraining } from "./cardio-training";
import { Images } from "./images";
import { Video } from "./video";

export class CardioExcercise {
  id: number;
  name: string | undefined;
  cardioTraining: CardioTraining | undefined;
  image: any [];
  video: any [];

constructor(id: number = 0, name?: string, cardioTraining?: CardioTraining, image: Images[] = [], video: Video[] = []){
    this.id = id;
    this.name = name;
    this.cardioTraining = cardioTraining;
    this.image = image;
    this.video = video;
}


}
