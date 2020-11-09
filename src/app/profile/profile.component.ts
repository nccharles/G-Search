import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userName='nccharles';
  repos: any;
  users: any;

  loading = false;
  constructor(
    private githubService: GithubService
  ) {
    this.githubService.updateuserName(this.userName);
    this.githubService.getUsers().subscribe((Profile) => {
      this.users = Profile;
    });
    this.githubService.getRepos().subscribe((Profile) => {
      this.repos = Profile;
    });
  }
  getUser() {
    this.githubService.updateuserName(this.userName);
    this.githubService.getUsers().subscribe((Profile) => {
      this.users = Profile;
    });
    this.githubService.getRepos().subscribe((Profile) => {
      this.repos = Profile;
    });
  }

  ngOnInit(): void {
    
  }
}
