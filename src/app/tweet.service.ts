import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './tweet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {WebsocketService} from './websocket.service';
import {Subject} from 'rxjs/Subject';

const TWEET_URL = 'ws://localhost:8080/Kwetter/tweets';

@Injectable()
export class TweetService {

  public tweets: Subject<Tweet>;

  constructor(private http: HttpClient, private wsService: WebsocketService) {
    this.tweets = <Subject<Tweet>>wsService
      .connect(TWEET_URL)
      .map((response: MessageEvent): Tweet => {
        const data = JSON.parse(response.data);
        return data;
      });
  }

  getTimeLine(offset: number, limit: number): Observable<Tweet[]> {
    return this
      .http
      .get('http://localhost:8080/Kwetter/api/user/timeline?offset=' + offset + '&limit=' + limit)
      .map(res => res as Tweet[]);
  }

  tweet(tweet: Tweet): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this
      .http
      .put<Tweet>('http://localhost:8080/Kwetter/api/user/tweets', tweet, httpOptions);
  }

  like(tweet: Tweet): Observable<any> {
    return this
      .http
      .put(`http://localhost:8080/Kwetter/api/user/tweets/${tweet.id}/like`, null);
  }

  unlike(tweet: Tweet): Observable<any> {
    return this
      .http
      .put(`http://localhost:8080/Kwetter/api/user/tweets/${tweet.id}/unlike`, null);
  }

}
