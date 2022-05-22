import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UsersState } from './users.reducer';

export const selectUsers = (state: AppState) => state.payload.users;
export const selectAllUsers = createSelector(
  selectUsers,
  (state: UsersState) => state.users
);