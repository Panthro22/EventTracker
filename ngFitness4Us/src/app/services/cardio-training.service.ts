import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { CardioTraining } from '../models/cardio-training';

@Injectable({
  providedIn: 'root'
})
export class CardioTrainingService {


  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/cardiotrainings';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  index(): Observable<CardioTraining[]>{
    return this.http.get<CardioTraining[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('TodoService.index(): error'));
      })

    );
  }
  create(cardioTraining: CardioTraining): Observable<CardioTraining>{

    return this.http.post<CardioTraining>(this.url, cardioTraining)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('cardioTrainingService.create(): error'));
      })

    );

  }
  show(cardioTrainingId: number): Observable<CardioTraining>{
    return this.http.get<CardioTraining>( this.url+'/'+cardioTrainingId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('cardioTrainingService.show(): error'));
    }));
  }
  update(cardioTraining: CardioTraining): Observable<CardioTraining>{
    return this.http.put<CardioTraining>(this.url+'/'+cardioTraining.id, cardioTraining).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('cardioTrainingService.update(): error');
        return throwError(
          () => new Error('cardioTrainingService.update(): error'+err))
      })
    );

  }
  destroy(weightExcercisetId: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+weightExcercisetId).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('cardioTrainingService.destroy(): error');
        return throwError(
          () => new Error('cardioTrainingService.destroy(): error'+err));
      })
    )
   }
}
