import { Component, OnInit } from '@angular/core';

import { User } from './../class/user'
import { UserService } from './../service/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './../html/user.component.html', 
  styleUrls: ['./../css/user.component.css'],
  providers: [UserService]
})

export class UsersComponent implements OnInit 
{ 
  name = 'Angular';
  users: User[]; 
  selectedUser: User;  

  constructor(private userService: UserService) { }
  
   getUsers(): void {
     this.userService.getUsers().then(users => this.users = users);
   }
  
   ngOnInit(): void {
     this.getUsers();
   }

   onSelect(user: User): void {
    this.selectedUser = user;
   }
}
