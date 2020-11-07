import { environment } from './../environments/environment';
import { Repos } from './repos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  repo: Repos;
  constructor(private http: HttpClient) {
    this.repo = new Repos('', '', '', '');
  }

  getRepos(userName: string) {
    interface ApiResponse {
      id: string;
      name: string;
      html_url: string;
      description: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.URL + '/users/' + userName + '/repos')
        .toPromise()
        .then(
          (response) => {
            this.repo.id = response.id;
            this.repo.name = response.name;
            this.repo.html_url = response.html_url;
            this.repo.description = response.description;
            resolve();
          },
          (error) => {
            this.repo.id = '...';
            this.repo.name = '...';
            this.repo.html_url = '...';
            this.repo.description = '...';
            reject(error);
          }
        );
    });
    return promise;
  }
}
