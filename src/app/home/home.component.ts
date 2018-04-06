import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Tweet} from '../tweet';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TweetService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  tweets: Tweet[];

  constructor(private tweetService: TweetService) {

  }

  ngOnInit() {
    this.tweetService.getTimeLine().subscribe(res => {
      this.tweets = res;
    });
  }

}
