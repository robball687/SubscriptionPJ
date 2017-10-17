import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User } from './../class/user'
import { Device } from './../class/device'
import { UserService } from './../service/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './../html/add-user.component.html', 
  styleUrls: ['./../css/user.component.css']
})

export class AddUserComponent implements OnInit 
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    var newid = 0;
    var tmpUser: User = new User();
    tmpUser.name=name;
    tmpUser.devices = new Array<Device>();
    this.userService.getUsers()
    .then((data) => {              
      for (var u of data) {  
          if(newid < u.id)
          {
            newid = u.id;
          } 
        }  
        newid=newid+1;
        tmpUser.id=newid;
    
        this.userService.create(tmpUser)
          .then(user => {
            this.users.push(user);
            this.selectedUser = null;
            alert("User ( " + user.name + " ) Created!");
            this.router.navigate(['/users']);
          });                  
      }).catch((ex) => {
        alert(ex);
        console.log(ex);
      }
    );    
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
