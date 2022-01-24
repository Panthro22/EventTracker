import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { CardioExcercise } from '../models/cardio-excercise';


@Injectable({
  providedIn: 'root'
})
export class CardioExcerciseService {


  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/cardioexcercises';

  constructor(
    private http: HttpClient,
  ) { }

  index(): Observable<CardioExcercise[]>{
    return this.http.get<CardioExcercise[]>(this.url + '?sorted=true')
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('CardioExcercise.index(): error'));
      })

    );
  }
  create(cardioExcercise: CardioExcercise): Observable<CardioExcercise>{

    return this.http.post<CardioExcercise>(this.url, cardioExcercise)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('CardioExcercise.create(): error'));
      })

    );

  }
  show(cardioExcerciseId: number): Observable<CardioExcercise>{
    return this.http.get<CardioExcercise>( this.url+'/'+cardioExcerciseId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('CardioExcercise.show(): error'));
    }));
  }
  update(cardioExcercise: CardioExcercise): Observable<CardioExcercise>{

    return this.http.put<CardioExcercise>(this.url+'/'+cardioExcercise.id, cardioExcercise).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('cardioExcerciseService.update(): error');
        return throwError(
          () => new Error('cardioExcerciseService.update(): error'+err))
      })
    );

  }
  destroy(cardioExcercise: CardioExcercise): Observable<void> {
    return this.http.delete<void>(this.url).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('cardioExcerciseService.destroy(): error');
        return throwError(
          () => new Error('cardioExcerciseService.destroy(): error'+err));
      })
    )
   }
}
