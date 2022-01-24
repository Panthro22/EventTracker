import { Images } from "./images";
import { Video } from "./video";
import { WeightTraining } from "./weight-training";

export class WeightExcercise {
  id: number;
  name: string | undefined;
  weightTraining: WeightTraining | undefined;
  images: any = [];
  video: any = [];

  constructor(id: number = 0, name?: string, weightTraining?: WeightTraining, images: Images[] = [], video: Video[] = []) {
    this.id = id;
    this.name = name;
    this.weightTraining = weightTraining;
    this.images = images;
    this.video = video;
  }
}
