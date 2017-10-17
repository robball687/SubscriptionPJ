import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }      from './component/users.component';
import { DevicesComponent }      from './component/devices.component';
import { UserDetailComponent }      from './component/user-detail.component';
import { AddUserComponent }      from './component/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },   
  { path: 'users',     component: UsersComponent },
  { path: 'devices',     component: DevicesComponent },
  { path: 'adduser',     component: AddUserComponent },
  { path: 'detail/:id',     component: UserDetailComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}