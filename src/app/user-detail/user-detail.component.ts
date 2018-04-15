import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {Tweet} from '../tweet';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {

  username: string;
  user = {};
  tweets: Tweet[];

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
    this.route.params.subscribe(params => this.username = params['username']);
  }

  ngOnInit() {
    if (this.username && this.username.length > 0) {
      this.userService.findUsers(this.username).subscribe(res => {
        if (res && res.length === 1) {
          this.user = res[0];
          this.userService.getTweets(this.username, 10).subscribe(tweets => {
            this.tweets = tweets;
          });
        }
      });
    }
  }
}
