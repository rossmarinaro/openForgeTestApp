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

}
