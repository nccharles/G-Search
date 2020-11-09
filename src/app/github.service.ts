import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  userName;

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(
      environment.URL +
        '/users/' +
        this.userName +
        '?access_token=' +
        environment.Key_Token
    );
  }
  getRepos() {
    return this.http.get(
      environment.URL +
        '/users/' +
        this.userName +
        '/repos' +
        '?access_token=' +
        environment.Key_Token
    );
  }
  updateuserName(userName: string) {
    this.userName = userName;
  }
  updateRepos(userName: string) {
    this.userName = userName;
  }
}
