import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './tweet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
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
