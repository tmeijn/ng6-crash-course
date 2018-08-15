import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.apiRoot}/users`);
  }

  getUserDetail(userId: number) {
    return this.http.get(`${environment.apiRoot}/users/${userId}`);
  }

  getPosts(): any {
    return this.http.get(`${environment.apiRoot}/posts`);
  }
}
