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
  users: User[] = [];

  constructor() { }    


  //------------------ select user from input

    async selectUser(user: User)
    { 
      let searchBarContent = Utils.getElementById('search-user');

      if(searchBarContent.value !== null)
        searchBarContent.value = user.login;

      this.getUser(user);
    }
    

  //-------------------------- get user
  
    async getUser(user: User)
    {
      console.log('user: ', user);  

      return this.invokeRenderUserInfo.emit(
         user !== null ? 
            user : Utils.getElementById('search-user').value
       );    
    }

}