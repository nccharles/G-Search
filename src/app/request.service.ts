import { environment } from './../environments/environment';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
user:User
  constructor(private http: HttpClient) {
    this.user=new User("","",0,0,"","","","","","")
  }

  getUsers(userName: string){
    interface ApiResponse{
      created_at: string,
      avatar_url: any,
      followers: number,
      following: number,
      repos_url: string,
      html_url: string,
      login: string,
      blog: string,
      bio: string,
      public_repos: string
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.URL + '/users/' + userName).toPromise().then(response=>{
        this.user.created_at = response.created_at
        this.user.avatar_url = response.avatar_url
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.repos_url=response.repos_url
        this.user.html_url=response.html_url
        this.user.login=response.login
        this.user.blog=response.blog
        this.user.bio=response.bio
        this.user.public_repos=response.public_repos
        resolve()
      },
      error=>{
        this.user.created_at = ""
        this.user.avatar_url = "#"
        this.user.followers=0
        this.user.following=0
        this.user.repos_url="#"
        this.user.html_url="#"
        this.user.login="..."
        this.user.blog="..."
        this.user.bio="..."
        this.user.public_repos="0"
        reject(error)
      })
    })
    return promise
}
}
