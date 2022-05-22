import { UsersState } from './users/users.reducer';

export interface AppState {
   type: 'LOADED',
   payload: {
       users: UsersState,
       user: 0,
       description: 'user profile rendered'
   }
}