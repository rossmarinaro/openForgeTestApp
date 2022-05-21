import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User } from '../user-model';
import { Octokit } from 'octokit';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  users: User[] = [];

  constructor(@Inject(DOCUMENT) document: Document) {}

  async ngOnInit()
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

//-------------------------- quick helpers

  getElementById(element: string) 
  {
    return (<HTMLInputElement>document.getElementById(element));
  }

  createElement(type: any, element: string)
  {
    return (<typeof type>document.createElement(element));
  }

  //-------------------------- submit / apply search results

  submitSearch()
  {
    for (let user of this.users)
      if (this.getElementById('search-user').value === user.login)
      {
        let avatar = this.getElementById('user-avatar').appendChild(this.createElement(typeof HTMLIonImgElement, 'ion-img'));   
        avatar.src = user.avatar_url;
        this.getElementById('user-login').innerHTML = user.login;
      }

    return false;
  }

}
