import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
} from './users.actions';
import { User } from '../../users';

export interface UsersState {
  todos: User[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: UsersState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(

  initialState,

  on(loadUsers, state => ({ ...state, status: 'loading' })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    error: null,
    status: 'success',
  })),

  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);