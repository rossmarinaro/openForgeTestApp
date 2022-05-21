import { Component } from '@angular/core';
import { User } from '../users/user-model';
import { Octokit } from 'octokit';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: User[] = [];

  constructor() { }

  ngOnInit() {

    console.log('user page initialized.');
    this.getUsers();

  }

  //----------------- get users from github and display them

  async getUsers()
  {

  //get user accounts

    const octokit = new Octokit(),
          accounts = await octokit.request('GET /users', {});

    accounts.data.map(async account => {
      
      const user = await octokit.request(`GET /users/${account.login}`, {
        username: 'USERNAME'
      });
    
    //push account to users array

      this.users.push({
        id: account.id,
        public_repos: user.data.public_repos,
        login: account.login,
        avatar_url: account.avatar_url,
        html_url: account.html_url,
        repos_url: account.repos_url
      });


    });

  }

}
