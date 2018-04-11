import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: Object[] = [];
  scrollDistance = 1;
  loadAmount = 20;
  searching = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.onScroll();
  }

  onScroll() {
    this.userService.getUsers(this.users.length, this.loadAmount).subscribe(res => this.users.push(...res));
  }

  onSearchInput(searchString: string) {
    if (searchString.length < 3) {
      if (this.searching) {
        this.onScroll();
      }
      return;
    }
    this.searching = true;
    this.userService.findUsers(searchString).subscribe(res => this.users = res);
  }
}
