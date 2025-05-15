import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users: User[] = []
  newAge: string = ''

  constructor(private userdata: DataService) {
    this.users = userdata.users
  }

  addAge() {
    this.users.forEach(user => {
      user.age += +this.newAge
    });
    this.newAge = ''
  }

  userClass(user: User): string {
    return user.age >= 18 ? 'adult' : ''
  }
}
