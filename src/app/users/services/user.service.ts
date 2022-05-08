import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { USER_PROFILE } from '../mock/user-profile.mock';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public createAccount(data: any): Observable<null> {
    return of(null).pipe(delay(1000));
  }

  public getUser(id: string): Observable<UserProfile> {
    return of(USER_PROFILE).pipe(delay(1000));
  }

  public follow(id: string): Observable<null> {
    return of(null).pipe(delay(1000));
  }
}
