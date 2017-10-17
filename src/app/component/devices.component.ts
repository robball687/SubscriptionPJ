import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Device } from './../class/device'
import { DeviceService } from './../service/device.service';

@Component({
  selector: 'my-devices',
  templateUrl: './../html/device.component.html', 
  styleUrls: ['./../css/object.component.css']
})

export class DevicesComponent implements OnInit 
{   
  name = 'Angular';
  devices: Device[]; 
  selectedDevice: Device;  

  constructor(    
    private deviceService: DeviceService,
    private router: Router) { }
    
  getDevices(): void {
    this.deviceService
        .getDevices()
        .then(devices => this.devices = devices);
  }
    
  delete(device: Device): void {
    this.deviceService
        .delete(device.id)
        .then(() => {
          this.devices = this.devices.filter(h => h !== device);
          if (this.selectedDevice === device) { this.selectedDevice = null; }
        });
  }
  
  ngOnInit(): void {
    this.getDevices();
  }

  onSelect(device: Device): void {    
    this.selectedDevice = device;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDevice.userFK]);
  }
  
  
}
