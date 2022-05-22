import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
import { User } from './users';

import * as Utils from './utils';
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeRenderUserInfo = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    


  //------------------ select user from input

    selectUser(user: User, users: User[])
    { 
      this.submitSearch(users);
      return Utils.getElementById('search-user').value = user.login;
    }
    
    
  //-------------------------- submit / apply search results, add image and login to template

    submitSearch(users: User[])
    {
  
      for (let user of users)
        if (Utils.getElementById('search-user').value === user.login)
        {
          let avatar = Utils.getElementById('user-avatar').appendChild(Utils.createElement(typeof HTMLIonImgElement, 'ion-img'));   
          avatar.src = user.avatar_url;
          Utils.getElementById('user-login').innerHTML = user.login;
        }

        this.invokeRenderUserInfo.emit();    

      return false;
    }
}