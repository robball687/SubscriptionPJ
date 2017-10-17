import 'rxjs/add/operator/switchMap';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { User } from './../class/user'
import { Device } from './../class/device'
import { UserService } from './../service/user.service';
import { DeviceService } from './../service/device.service';

@Component({
  selector: 'user-detail',
  templateUrl: './../html/user-detail.component.html',
  styleUrls: ['./../css/object.component.css']
})
export class UserDetailComponent implements OnInit 
{    
    user: User;
    selectedDevice: Device;
    devices: Device[];   

    constructor(
      private userService: UserService,
      private deviceService: DeviceService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
        .subscribe(user => this.user = user);
      this.getDevices();
    }

    addDevice(newName: string, user: User): void {
      newName = newName.trim();
      if (!newName) { return; }

      var newid = 0;         
      var tmpDevice: Device = new Device();
      tmpDevice.name = newName;
      tmpDevice.userFK = this.user.id;

      this.deviceService.getDevices()
        .then((data) => {              
          for (var u of data) {                        
            if(newid < u.id)
            {
              newid = u.id;
            }  
          }      
          newid = newid + 1;           
          tmpDevice.id = newid;               
          this.deviceService.create(tmpDevice)
          .then(device => {
            this.devices.push(tmpDevice);
          });    
        }).catch((ex) => {
          alert(ex);
          console.log(ex);
        }
      );      
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

    getDevices(): void {
      this.deviceService
          .getDevices()
          .then(devices => this.devices = devices.filter(x=>x.userFK == this.user.id));        
    }
}