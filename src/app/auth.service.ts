import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): void {
    const user = new User(username, password);
    this.http
      .post('http://localhost:8080/JEA_Kwetter/api/login', user, {headers: this.httpOptions.headers, observe: 'response'})
      .subscribe((res) => {
        localStorage.setItem('token', res.headers.get('Authorization'));
      });
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }
}
