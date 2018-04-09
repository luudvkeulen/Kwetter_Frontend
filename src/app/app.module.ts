import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {TweetComponent} from './tweet/tweet.component';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {AuthService} from './auth.service';
import {TokenInterceptor} from './token-interceptor';
import {AuthGuardService} from './auth-guard.service';
import { UserComponent } from './user/user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserDetailComponent} from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    TweetComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
