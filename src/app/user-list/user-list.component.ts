import { Component, OnInit } from '@angular/core';
import {UsersService} from "../service/users.service";

@Component({
  selector: 'user-list-component',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserList implements OnInit {
  userList;

  constructor(service: UsersService) {
    this.userList = service.getUsers();
  }

  ngOnInit(): void {
  }

}
