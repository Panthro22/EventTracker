import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUrl = 'http://localhost:8083/';
    private url = 'api/users';
  constructor(
    private http: HttpClient
  ) { }
}
