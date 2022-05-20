import { Component, OnInit } from '@angular/core';
import { User } from './user-model';
import { Octokit } from 'octokit';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})

export class UsersPage implements OnInit {

 
  users: User[] = [];

  
  // users: User[] = [
  //   {
  //     id: 'name',
  //     login: 'name',
  //     avatar_url: 'https://github.com/rossmarinaro/openForgeTestApp/blob/main/src/assets/icon/favicon.png',
  //     html_url: '',
  //     repos_url: []
  //   }
  // ]

  constructor() { }

  ngOnInit() {

    console.log('user page initialized.');
    this.getUsers();

  }

  async getUsers()
  {
    const octokit = new Octokit({
    //  auth: ''
    })

    const accounts = await octokit.request('GET /users', {});

    accounts.data.map(account => {
      
      this.users.push({
        id: account.id,
        login: account.login,
        avatar_url: account.avatar_url,
        html_url: account.html_url,
        repos_url: account.repos_url
      })
      console.log('account: ', account);
    });

    
  }

}
