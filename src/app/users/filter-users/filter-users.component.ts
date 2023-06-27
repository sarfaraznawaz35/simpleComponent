import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss', 'custom-style.scss']
})
export class FilterUsersComponent implements OnInit, OnDestroy {
  
  @Input()
  channelName: String

  @Input()
  tax: Number

  @Output()
  updatedList = new EventEmitter();

  constructor(private usersService: UsersService ) {}

  ngOnInit():void{
    const users = this.usersService.getUsers();
    console.log("From filter users");
    console.log(users);
  }

  ngOnDestroy(): void {
    console.log("component is destroyed");
  }


  updateUsers(){
    const userObj = {userId: 10, userName: 'ARC Tutorials'}
    this.updatedList.emit(userObj);
  }

}
