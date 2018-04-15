import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './tweet';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getLoggedInUser(): Observable<Object> {
    return this.http.get('http://localhost:8080/Kwetter/api/user');
  }

  getUsers(offset: number, limit: number): Observable<any> {
    return this.http.get(`http://localhost:8080/Kwetter/api/users?offset=${offset}&limit=${limit}`);
  }

  findUsers(searchString: string): Observable<any> {
    return this.http.get(`http://localhost:8080/Kwetter/api/users/${searchString}`);
  }

  getTweets(username: string, amount: number): Observable<Tweet[]> {
    return this.http.get(`http://localhost:8080/Kwetter/api/users/${username}/tweets?amount=${amount}`).map(res => res as Tweet[]);
  }
}
