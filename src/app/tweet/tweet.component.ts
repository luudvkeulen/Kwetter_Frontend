import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Tweet} from '../tweet';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TweetService]
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
  }


  like(): void {
    this.tweet.hasBeenLiked = !this.tweet.hasBeenLiked;
    if (this.tweet.hasBeenLiked) {
      this.tweetService.like(this.tweet).subscribe(res => this.tweet = res);
    } else {
      this.tweetService.unlike(this.tweet).subscribe(res => this.tweet = res);
    }
  }
}
