import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Tweet} from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() {
  }

  ngOnInit() {
  }

}
