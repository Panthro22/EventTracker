import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {


  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/videos';

  constructor(
    private http: HttpClient,
  ) { }

  index(): Observable<Video[]>{
    return this.http.get<Video[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('videoService.index(): error'));
      })

    );
  }
  create(video: Video): Observable<Video>{
    return this.http.post<Video>(this.url, video)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('videoService.create(): error'));
      })

    );

  }
  show(videoId: number): Observable<Video>{
    return this.http.get<Video>( this.url+'/'+videoId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('videoService.show(): error'));
    }));
  }
  update(video: Video): Observable<Video>{

    return this.http.put<Video>(this.url+'/'+video.id, video).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('videoService.update(): error');
        return throwError(
          () => new Error('videoService.update(): error'+err))
      })
    );

  }
  destroy(videoId: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+videoId).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('videoService.destroy(): error');
        return throwError(
          () => new Error('videoService.destroy(): error'+err));
      })
    )
   }
}
