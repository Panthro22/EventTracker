import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUrl = 'http://localhost:8083/';
    private url = 'api/users';

    constructor(
      private http: HttpClient,
    ) { }

    index(): Observable<User[]>{
      return this.http.get<User[]>(this.url)
      .pipe(
        catchError((err:any) => {
          console.log(err);
          return throwError(() => new Error('userService.index(): error'));
        })

      );
    }
    create(user: User): Observable<User>{
      return this.http.post<User>(this.url, user)
      .pipe(
        catchError((err:any) => {
          console.log(err);
          return throwError(() =>new Error('userService.create(): error'));
        })

      );

    }
    show(userId: number): Observable<User>{
      return this.http.get<User>( this.url+'/'+userId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(() =>new Error('userService.show(): error'));
      }));
    }
    update(user: User): Observable<User>{

      return this.http.put<User>(this.url+'/'+user.id, user).pipe(
        catchError((err:any) => {
          console.log(err);
          console.log('userService.update(): error');
          return throwError(
            () => new Error('userService.update(): error'+err))
        })
      );

    }
    destroy(userId: number): Observable<void> {
      return this.http.delete<void>(this.url+'/'+userId).pipe(
        catchError((err:any) => {
          console.log(err);
          console.log('userService.destroy(): error');
          return throwError(
            () => new Error('userService.destroy(): error'+err));
        })
      )
     }
}
