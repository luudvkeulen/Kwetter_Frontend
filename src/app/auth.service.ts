import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  static getToken(): string {
    return localStorage.getItem('token');
  }

  static isAuthenticated(): boolean {
    const token = AuthService.getToken();
    return tokenNotExpired(null, token);
  }

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    const user = new User(username, password);
    return this
      .http
      .post('http://localhost:8080/JEA_Kwetter/api/login', user, {headers: this.httpOptions.headers, observe: 'response'});
  }
}
