import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from './users';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getUsers(): Promise<User[]> {
    if (!this.storageInitialised) await this.storage.create();

    return (await this.storage.get('users')) || [];
  }


}