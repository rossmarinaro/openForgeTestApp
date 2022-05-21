import { createAction, props } from '@ngrx/store';
import { User } from '../../users';

export const loadUsers = createAction('[Tab 1 Page] Load Users');

export const loadUsersSuccess = createAction(
  '[User API] User Load Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User API] User Load Failure',
  props<{ error: string }>()
);