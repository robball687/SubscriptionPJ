import { Component, Input } from '@angular/core';

import { User } from './../class/user'



@Component({
  selector: 'user-detail',
  templateUrl: './../html/user-detail.component.html'
})
export class UserDetailComponent 
{    
    @Input() user: User;
}