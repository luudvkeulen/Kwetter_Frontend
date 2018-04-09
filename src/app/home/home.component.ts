import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Tweet} from '../tweet';
import {TweetService} from '../tweet.service';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TweetService, UserService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  tweets: Tweet[];
  user = {};
  scrollDistance = 1;
  loadAmount = 10;
  loading = false;

  tweetText = '';

  constructor(private tweetService: TweetService, private userService: UserService) {

  }

  ngOnInit() {
    this.tweetService.getTimeLine(0, this.loadAmount).subscribe(res => {
      this.tweets = res;
    });

    this.userService.getLoggedInUser().subscribe(res => {
      this.user = res;
    });
  }

  onScroll(): void {
    if (!this.loading) {
      this.tweetService.getTimeLine(this.tweets.length, this.loadAmount).subscribe(res => {
        this.tweets = this.tweets.concat(res);
      });
    }
  }

  tweet(): void {
    const newTweet = new Tweet(this.tweetText, null, null, null, null);
    this.tweetService.tweet(newTweet).subscribe(res => {
      this.tweets.unshift(res);
    });
    this.tweetText = '';
    console.log(this.tweetText);
  }
}
