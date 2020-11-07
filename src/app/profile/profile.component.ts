import { AlertService } from './../alert.service';
import { RequestService } from './../request.service';
import { GithubService } from './../github.service';
import { Repos } from './../repos';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userName = 'nccharles';
  repos: Repos;
  users: User;

  loading = false;
  errorMessage;
  windowScrolled: boolean;
  constructor(
    private githubService: GithubService,
    private profileRequest: RequestService,
    private alertService: AlertService
  ) {}
  showRepos() {
    this.githubService.getRepos(this.userName);

    this.repos = this.githubService.repo;
  }
  ngOnInit(): void {
    this.profileRequest.getUsers(this.userName);

    this.users = this.profileRequest.user;
  }
}
