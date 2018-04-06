import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './tweet';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
  }

  getTimeLine(): Observable<Tweet[]> {
    return this
      .http
      .get('http://localhost:8080/JEA_Kwetter/api/tweets')
      .map(res => res as Tweet[]);
  }

}
