import { User } from "./user";
import { Workout } from "./workout";

export class DailyLogEntries {
  id: number;
  date: Date | undefined;
  user: User | undefined;
  workout: Workout | undefined;

  constructor(id: number = 0, date?: Date, user?: User, workout?: Workout) {
    this.id = id;
    this.date = date;
    this.user = user;
    this.workout = workout;
  }
}
