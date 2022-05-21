import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User, fetchUsers } from '../users';


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
    fetchUsers(this.users);
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

  //-------------------------- submit / apply search results, add image and login to template

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
