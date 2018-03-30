import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    AuthService
  ]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
  }
}
