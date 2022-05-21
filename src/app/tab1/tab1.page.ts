import { Component } from '@angular/core';
import { User, fetchUsers } from '../users';
import * as Utils from '../utils';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: User[] = [];

  constructor() { }

  async ngOnInit() 
  {
    fetchUsers(this.users);
  }

  //------------------ select user

  selectUser(user: any)
  {
    return Utils.getElementById('search-user').value = user.login;
  }

}
