
import { User } from './user';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/service/local-storage.service';



@Injectable({
  providedIn: 'root'
})

export class UserCollection {
  private _users: Array<User>;

  public constructor(
    private storage: LocalStorageService
  ) {
    // instanciates the users Array
    this._users = new Array<User>();
    // hydrate the collection with some dummy datas
    this._hydrate();
  }
/**
 * Adds a user in the collection
 * @param user user to be add
 */
  public add(user: User): UserCollection {
    this._users.push(user); // add an element to the array

    // just persist all...
    this.storage.set('user', this._users);

    return this;
  }

  /**
   * gets a user from the collection
   */
  public get(): User {
    return null;
  }

/**
 * Update a user in the collection
 * @param user user update
 */
  public update(user: User, newUser: User): UserCollection {
    const index: number = this._users.indexOf(user);
    this._users[index] = newUser;

    // Dont forget to persist
    this.storage.set('users', this._users);

    return this;
  }

/**
 * Remove a user in the collection
 * @param user the user to be delete
 */
  public remove(user: User): UserCollection {
    // gets the index value of "user" in the array
    const index: number = this._users.indexOf(user);

    // if found (index<> -1)
    if (index !== -1) {
      this._users.splice(index, 1);
    }

    // invoke the persistent method
    this.storage.set('users', this._users);

    return this;
  }

  public success(user: User): UserCollection {

  const index: number = this._users.indexOf(user);
  if (index !== -1) {
   this._users.splice(index, 1);
  }
  this.storage.set('users', this._users);

  return this;

  }


  /**
   * Gets the collection of users
   * @return Array<User>
   */
  public getCollection(): Array<User> {
    return this._users;
  }

  /**
   * retrieve anonymous colection of things...
   * just think to make real User
   */
  private _hydrate(): void {
    const users: Array<any> = this.storage.get('user');
    if (users.length) {
      users.forEach((user: any, index: number) => {
          this._users.push((new User()).transform(user));
      });
    }
  }

}
