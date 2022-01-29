import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { USER_DATA } from '../mock/user-data.mock';
import { UserData } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = new BehaviorSubject<string | null>(null);
  private _user = new BehaviorSubject<any>(null);

  constructor() { }

  set token(token: string | null) {
    this._token.next(token);
    if (!token) {
      localStorage.removeItem('auth_token');
    } else {
      localStorage.setItem('auth_token', token);
    }
  }

  set authUser(user: any) {
    this._user.next(user);
    if (!user) {
      localStorage.removeItem('user_data');
    } else {
      localStorage.setItem('user_data', JSON.stringify(user));
    }
  }

  get token(): string | null {
    return localStorage.getItem('auth_token');
  }

  get authUser(): UserData {
    const user = localStorage.getItem('user_data');
    return user ? JSON.parse(user) : null;
  }

  public authUserObservable(): Observable<UserData> {
    const user = localStorage.getItem('user_data');
    if (user) {
      this.authUser = JSON.parse(user);
    }
    return this._user.asObservable();
  }

  public logout(): Observable<null> {
    this.token = null;
    return of(null).pipe(delay(500));
  }

  public login(form: any): Observable<string> {
    this.token = 'asd6fa4sd89f7asdf6a4sd56f4as9d8f7asdfas';
    return of(this.token).pipe(delay(1000));
  }

  public getUserData(): Observable<any> {
    return of(USER_DATA).pipe(delay(500));
  }
}
