import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {


  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/workouts';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  index(): Observable<Workout[]>{
    return this.http.get<Workout[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('workoutService.index(): error'));
      })

    );
  }
  create(workout: Workout): Observable<Workout>{
    return this.http.post<Workout>(this.url, workout)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('workoutService.create(): error'));
      })

    );

  }
  show(workoutId: number): Observable<Workout>{
    return this.http.get<Workout>( this.url+'/'+workoutId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('workoutService.show(): error'));
    }));
  }
  update(workout: Workout): Observable<Workout>{
    return this.http.put<Workout>(this.url+'/'+workout.id, workout).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('workoutService.update(): error');
        return throwError(
          () => new Error('workoutService.update(): error'+err))
      })
    );

  }
  destroy(workoutId: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+workoutId).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('workoutService.destroy(): error');
        return throwError(
          () => new Error('workoutService.destroy(): error'+err));
      })
    )
   }
}
