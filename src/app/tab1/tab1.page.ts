import { Component } from '@angular/core';
import { User, fetchUsers } from '../users';
import { Observable } from 'rxjs';
import { loadUsers } from '../state/users/users.actions';
import { selectAllUsers } from '../state/users/users.selectors';
import { Store } from '@ngrx/store';
import * as Utils from '../utils';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public allUsers$ = this.store.select(selectAllUsers);
  public user = '';
  users: User[] = [];

  constructor(private store: Store) { }

  async ngOnInit() 
  {
    this.store.dispatch(loadUsers());
    fetchUsers(this.users);
  }

  //------------------ select user

  selectUser(user: any)
  {
    return Utils.getElementById('search-user').value = user.login;
  }

}


