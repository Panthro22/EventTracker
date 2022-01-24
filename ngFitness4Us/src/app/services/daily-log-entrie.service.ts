import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DailyLogEntries } from '../models/daily-log-entries';

@Injectable({
  providedIn: 'root'
})
export class DailyLogEntrieService {


  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/DailyLogEntries';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  index(): Observable<DailyLogEntries[]>{
    return this.http.get<DailyLogEntries[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('dailyLogEntriesService.index(): error'));
      })

    );
  }
  create(dailyLogEntries: DailyLogEntries): Observable<DailyLogEntries>{
    return this.http.post<DailyLogEntries>(this.url, dailyLogEntries)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('dailyLogEntriesService.create(): error'));
      })

    );

  }
  show(dailyLogEntriesId: number): Observable<DailyLogEntries>{
    return this.http.get<DailyLogEntries>( this.url+'/'+dailyLogEntriesId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('dailyLogEntriesService.show(): error'));
    }));
  }
  update(dailyLogEntries: DailyLogEntries): Observable<DailyLogEntries>{
    return this.http.put<DailyLogEntries>(this.url+'/'+dailyLogEntries.id, dailyLogEntries).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('dailyLogEntriesService.update(): error');
        return throwError(
          () => new Error('dailyLogEntriesService.update(): error'+err))
      })
    );

  }
  destroy(dailyLogEntriesId: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+dailyLogEntriesId).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('dailyLogEntriesService.destroy(): error');
        return throwError(
          () => new Error('dailyLogEntriesService.destroy(): error'+err));
      })
    )
   }
}
