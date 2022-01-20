import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public createAccount(data: any): Observable<null> {
    return of(null).pipe(delay(1000));
  }
}
