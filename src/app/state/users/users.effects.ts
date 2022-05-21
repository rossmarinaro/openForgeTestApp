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
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private UsersService: UsersService
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.UsersService.getUsers()).pipe(
          // Take the returned value and return a new success action containing the todos
          map(users => loadUsersSuccess({ users: users[''] })),
          // Or... if it errors return a new failure action containing the error
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  // Run this code when the addTodo or removeTodo action is dispatched
//   saveTodos$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(addTodo, removeTodo),
//         withLatestFrom(this.store.select(selectAllUsers)),
//         switchMap(([action, users]) => from(this.todoService.saveUsers(users)))
//       ),
//     // Most effects dispatch another action, but this one is just a "fire and forget" effect
//     { dispatch: false }
//   );
}