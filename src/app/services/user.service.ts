import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private _users: User [] = [];
  constructor(private http: HttpClient) {
this.getUsers();
  }

  get users() {
    return this._users;
  }
set users(users){
  this._users = users;
}
  getUsers(){
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => {
      this.users = data;
    })
  }

  getFilteredUsers(searchTerm: string) {
    return this.users.filter((user) => user.name.includes(searchTerm))
  }
}
