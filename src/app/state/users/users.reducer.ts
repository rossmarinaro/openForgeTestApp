import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../users';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
} from './users.actions';


export interface UsersState {
  users: User[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: UsersState = {
  users: [],
  error: null,
  status: 'pending',
};

export const usersReducer = createReducer(

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


// const userData = {
//   id: null,
//   public_repos: null,
//   login: null,
//   avatar_url: null,
//   html_url: null,
//   repos_url: null
// }

// export function usersReducer(state = []/* userData */, action: Action)
// {
//   switch(action.type)
//   {
//     case 'LOADED':
//         return [
//           ...state,
//           {
//             user: ++action.payload.user,
//             description: action.payload.description,
//             resolved: false
//           }
//         ];
//       default:
//         return state;
//   }
// }