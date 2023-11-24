import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User(0, 'John', 'Smith', 'john@hotmail.com'),
    new User(1, 'Ann', 'Joe', 'ann@hotmail.com'),
    new User(2, 'Jane', 'Doe', 'jane@example.com'),
    new User(3, 'Bob', 'Johnson', 'bob@example.com'),
    new User(4, 'Juan', 'Garcia', 'juan@hotmail.com'),
    new User(5, 'Flor', 'Gutierrez', 'flor@example.com'),
    new User(6, 'Yennifer', 'Vargas', 'yenifer@example.com'),
  ]

  getUsers = () => this.users
  getUser = (idUser: number) => this.users.find(user => user.id === idUser);
} 

export class User {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public email: string,
  ) {}
}
