import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = new BehaviorSubject<string|null>(null);

  constructor() { }

  set token(token: string|null) {
    this._token.next(token);
    if (!token) {
      localStorage.removeItem('auth_token');
    } else {
      localStorage.setItem('auth_token', token);
    }
  }

  get token(): string|null {
    return localStorage.getItem('auth_token');
  }

  public logout(): Observable<null> {
    this.token = null;
    return of(null).pipe(delay(500));
  }

  public login(form: any): Observable<string> {
    this.token = 'asd6fa4sd89f7asdf6a4sd56f4as9d8f7asdfas';
    return of(this.token).pipe(delay(1000));
  }
}
