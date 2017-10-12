import { Component, OnInit } from '@angular/core';

import { User }        from './class/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']   
})
export class AppComponent implements OnInit {
  title = 'User System';
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => this.users = users.slice(1, 5));
  }
}