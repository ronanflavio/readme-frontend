import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { UserService } from 'src/app/users/services/user.service';
import { environment } from 'src/environments/environment';
import { USER_DATA } from '../mock/user-data.mock';
import { UserData } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = new BehaviorSubject<string | null>(null);
  private _user = new BehaviorSubject<any>(null);

  constructor(
    private _userService: UserService
  ) { }

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
    const userJson = localStorage.getItem('user_data');
    const user = userJson ? JSON.parse(userJson) : null;
    if (user) {
      user.urlFoto = `${environment.api}/${user.urlFoto}`;
    }
    return user;
  }

  public authUserObservable(): Observable<UserData> {
    const userJson = localStorage.getItem('user_data');
    if (userJson) {
      const user = JSON.parse(userJson);
      user.urlFoto = `${environment.api}/${user.urlFoto}`;
      this.authUser = user;
    }
    return this._user.asObservable();
  }

  public logout(): Observable<null> {
    this.token = null;
    return of(null).pipe(delay(500));
  }

  public login(form: any): Observable<string> {
    this.token = 'fake-auth-token';
    return of(this.token).pipe(delay(1000));
  }

  public getUserData(): Observable<any> {
    return this._userService.getUser(USER_DATA.id, USER_DATA.id);
  }
}
