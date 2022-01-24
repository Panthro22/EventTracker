import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { WeightTraining } from '../models/weight-training';

@Injectable({
  providedIn: 'root'
})
export class WeightTrainingService {


  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/weighttrainings';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  index(): Observable<WeightTraining[]>{
    return this.http.get<WeightTraining[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('weightTrainingService.index(): error'));
      })

    );
  }
  create(weightTraining: WeightTraining): Observable<WeightTraining>{
    return this.http.post<WeightTraining>(this.url, weightTraining)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('weightTrainingService.create(): error'));
      })

    );

  }
  show(weightTrainingId: number): Observable<WeightTraining>{
    return this.http.get<WeightTraining>( this.url+'/'+weightTrainingId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('weightTrainingService.show(): error'));
    }));
  }
  update(weightTraining: WeightTraining): Observable<WeightTraining>{
    return this.http.put<WeightTraining>(this.url+'/'+weightTraining.id, weightTraining).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('weightTrainingService.update(): error');
        return throwError(
          () => new Error('weightTrainingService.update(): error'+err))
      })
    );

  }
  destroy(weightTrainingId: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+weightTrainingId).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('weightTrainingService.destroy(): error');
        return throwError(
          () => new Error('weightTrainingService.destroy(): error'+err));
      })
    )
   }
}
