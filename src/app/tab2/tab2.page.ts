import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User, fetchUsers } from '../users';
import { EventEmitterService } from '../event-emitter.service';  

import * as Utils from '../utils';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  users: User[] = [];

  constructor(
    @Inject(DOCUMENT) document: Document,  
    private eventEmitterService: EventEmitterService  
    ) {}

    ngOnInit() 
    {

      if (this.eventEmitterService.subsVar == undefined)  
      {    
        this.eventEmitterService.subsVar = this.eventEmitterService.    
        invokeRenderUserInfo.subscribe((user) => this.renderAccount(user));    
      } 

      fetchUsers(this.users);
    }

  //-------------------------- submit / apply search results, add image and login to template

  submitSearch(_user: User)
  {
      for (let user of this.users)
        if (Utils.getElementById('search-user').value === user.login)
          this.renderAccount(user);

    return false;
  }


//----------------------------- render to screen

  renderAccount(user: User)
  {
    let avatar = Utils.getElementById('user-avatar').appendChild(Utils.createElement(typeof HTMLIonImgElement, 'ion-img'));   
    avatar.src = user.avatar_url;
    Utils.getElementById('user-login').innerHTML = user.login;
  }

}
