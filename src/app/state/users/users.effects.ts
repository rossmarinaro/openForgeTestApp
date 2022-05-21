import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
} from './users.actions';
import { UsersService } from '../../users.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllUsers } from './users.selectors';
import { AppState } from '../app.state';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private UsersService: UsersService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        from(this.UsersService.getUsers()).pipe(
          map(users => loadUsersSuccess({ users: users[''] })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

}