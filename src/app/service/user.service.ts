import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './../class/user';

@Injectable()
export class UserService {
    private usersUrl = 'api/users';

    constructor(private http: Http) { }
    
    getUsers(): Promise<User[]> {
     return this.http.get(this.usersUrl)
                .toPromise()
                .then(response => response.json().data as User[])
                .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
    }    
}