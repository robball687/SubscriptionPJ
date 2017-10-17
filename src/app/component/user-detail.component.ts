import 'rxjs/add/operator/switchMap';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { User } from './../class/user'
import { Device } from './../class/device'
import { UserService } from './../service/user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './../html/user-detail.component.html',
  styleUrls: ['./../css/user-detail.component.css']
})
export class UserDetailComponent implements OnInit 
{    
    user: User;
    selectedDevice: Device;  

    constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
        .subscribe(user => this.user = user);
    }

    addDevice(newName: string, user: User): void {
      newName = newName.trim();
      if (!newName) { return; }
      this.user.devices.push({id: 5, name:newName});
      this.userService.update(this.user);        
    }

    save(): void {
      this.userService.update(this.user)
        .then(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }

    onSelect(device: Device): void {          
      this.selectedDevice = device;
    }
}