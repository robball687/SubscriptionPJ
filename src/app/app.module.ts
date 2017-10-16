import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppComponent }        from './app.component';
import { UsersComponent }     from './component/users.component';
import { AddUserComponent }     from './component/add-user.component';
import { UserService }         from './service/user.service';
import { UserDetailComponent } from './component/user-detail.component';
import { UserSearchComponent } from './component/user-search.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,    
    UsersComponent,
    UserDetailComponent,
    UserSearchComponent,
    AddUserComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
