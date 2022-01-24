import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Images } from '../models/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl+'api/images';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  index(): Observable<Images[]>{
    return this.http.get<Images[]>(this.url)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() => new Error('imageService.index(): error'));
      })

    );
  }
  create(image: Images): Observable<Images>{
    return this.http.post<Images>(this.url, image)
    .pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError(() =>new Error('imageService.create(): error'));
      })

    );

  }
  show(imageId: number): Observable<Images>{
    return this.http.get<Images>( this.url+'/'+imageId).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(() =>new Error('imageService.show(): error'));
    }));
  }
  update(image: Images): Observable<Images>{

    return this.http.put<Images>(this.url+'/'+image.id, image).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('imageService.update(): error');
        return throwError(
          () => new Error('imageService.update(): error'+err))
      })
    );

  }
  destroy(imageId: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+imageId).pipe(
      catchError((err:any) => {
        console.log(err);
        console.log('imageService.destroy(): error');
        return throwError(
          () => new Error('imageService.destroy(): error'+err));
      })
    )
   }
}
