import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { WeightExcercise } from '../models/weight-excercise';

@Injectable({
  providedIn: 'root'
})
export class WeightExcerciseService {

  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/weightexcercises';

  constructor(
    private http: HttpClient

    ) { }

  index(): Observable<WeightExcercise[]>{
    return this.http.get<WeightExcercise[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('weightExcerciseService.index(): error'));
      })

    );
  }
  create(weightExcercise: WeightExcercise): Observable<WeightExcercise>{

    return this.http.post<WeightExcercise>(this.url, weightExcercise)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('weightExcerciseService.create(): error'));
      })

    );

  }
  show(weightExcerciseId: number): Observable<WeightExcercise>{
    return this.http.get<WeightExcercise>( this.url+'/'+weightExcerciseId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('weightExcerciseService.show(): error'));
    }));
  }
  update(weightExcercise: WeightExcercise): Observable<WeightExcercise>{
    return this.http.put<WeightExcercise>(this.url+'/'+weightExcercise.id, weightExcercise).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('weightExcerciseService.update(): error');
        return throwError(
          () => new Error('weightExcerciseService.update(): error'+err))
      })
    );

  }
  destroy(weightExcercisetId: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+weightExcercisetId).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('weightExcerciseService.destroy(): error');
        return throwError(
          () => new Error('weightExcerciseService.destroy(): error'+err));
      })
    )
   }

}
