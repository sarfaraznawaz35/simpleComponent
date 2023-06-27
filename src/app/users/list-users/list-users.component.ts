import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  cName = 'ARC Tutotial on YouTube'
  taxVal = 200;
  user = {};
  listUsers = {}
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.listUsers = this.usersService.getUsers();
  }

  users(event){
    this.user = event;
  }

}
