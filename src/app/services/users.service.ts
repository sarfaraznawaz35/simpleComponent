import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient ) { }


  getUsers(){
    //return this.http.get('http://your-api-endpoint');

    const users = [
      {userId: 454, username: 'krishna'},
      {userId: 56445, username: 'Ram'},
      {userId: 67676, username: 'Mark'}

    ];
    return users;

  }

}
