import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: Object[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => this.users = res);
  }

  onSearchInput(event) {
    console.log('input' + JSON.stringify(event));
  }
}
