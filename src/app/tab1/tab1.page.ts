import { Component, ViewChild } from '@angular/core';
import { User, fetchUsers } from '../users';
import { Observable } from 'rxjs';
import { loadUsers } from '../state/users/users.actions';
import { selectAllUsers } from '../state/users/users.selectors';
import { Store } from '@ngrx/store';
import { EventEmitterService } from '../event-emitter.service';  
import { AppState } from '../state/app.state';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public user = '';
  public allUsers$: Observable<User[]>
  users: User[] = [];
  

  constructor(
      private store: Store<AppState>,
      private eventEmitterService: EventEmitterService    
    ) { 
    this.allUsers$ = this.store.select(selectAllUsers);
  }

  ngOnInit() 
  {
  
    this.store.dispatch(loadUsers());
    fetchUsers(this.users);
    
  }
  loadData(event) { console.log(event)
    // setTimeout(() => {
    //   console.log('Done');
    //   event.target.complete();
    //  if (data.length === 1000) {
    //    event.target.disabled = true;
    //   }
    // }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

} 