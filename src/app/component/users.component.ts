import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User } from './../class/user'
import { UserService } from './../service/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './../html/user.component.html', 
  styleUrls: ['./../css/object.component.css']
})

export class UsersComponent implements OnInit 
{   
  name = 'Angular';
  users: User[]; 
  selectedUser: User;  

  constructor(    
    private userService: UserService,
    private router: Router) { }
    
  getUsers(): void {
    this.userService
        .getUsers()
        .then(users => this.users = users);
  }
    
  delete(user: User): void {
    this.userService
        .delete(user.id)
        .then(() => {
          this.users = this.users.filter(h => h !== user);
          if (this.selectedUser === user) { this.selectedUser = null; }
        });
  }
  
  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {    
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
  
  
}
