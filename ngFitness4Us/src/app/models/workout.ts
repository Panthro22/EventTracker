import { CardioTraining } from "./cardio-training";
import { DailyLogEntries } from "./daily-log-entries";
import { WeightTraining } from "./weight-training";

export class Workout {
  id: number;
  startTime: Date | undefined;
  endTime: Date | undefined;
  logEntry: DailyLogEntries | undefined;
  weightTraining: any[];
  cardioTraining: any[];

  constructor(id: number = 0, startTime?: Date, endTime?: Date, logEntry?: DailyLogEntries, weightTraining: WeightTraining[] =[], cardioTraining: CardioTraining[]=[]) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.logEntry = logEntry;
    this.weightTraining = weightTraining;
    this.cardioTraining = cardioTraining;
  }
}
