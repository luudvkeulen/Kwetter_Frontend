import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() {
  }

  ngOnInit() {
    //this.replaceMentionsWithUrl();
  }

  replaceMentionsWithUrl(): void {
    for (const mention of this.tweet.mentions) {
      const mentionwithprefix = `@${mention}`;
      this.tweet.message = this.tweet.message.replace(mentionwithprefix, '<a href="users/$&">$&</a>');
    }
    // console.log('Replace');
    // this.tweet.message = this.tweet.message.replace('(?:\\s@)([A-Za-z0-9_]+)', 'MENTION');
  }

}
