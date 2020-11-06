import { environment } from './../environments/environment';
import { Repos } from './repos';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): Observable<Repos[]> {
       return this.http.get<Repos[]>(environment.URL + '/users/' + userName + '/repos');
  }
}
