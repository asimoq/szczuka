import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users : User[] = []
  
  constructor() {
    this.users.push(
      {name: 'Ferenc', age: 15},
      {name: 'Gábor', age: 19},
      {name: 'Ilona', age: 12},
      {name: 'Sára', age: 25},
      {name: 'Misi', age: 40},
    )
  }
}
