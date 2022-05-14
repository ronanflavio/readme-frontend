import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _api = environment.api + '/usuarios/v1';

  constructor(
    private _http: HttpClient
  ) { }

  public createAccount(data: any): Observable<null> {
    return of(null).pipe(delay(1000));
  }

  public getUser(id: string, authId: string): Observable<any> {
    const endpoint = `${this._api}/usuarios/${id}?me=${authId}`;
    return this._http.get(endpoint);
  }

  public follow(authId: string, userId: string): Observable<any> {
    const endpoint = `${this._api}/usuarios/${userId}/seguidores`;
    return this._http.post(endpoint, {
      idUsuario: authId
    });
  }

  public listFollowing(userId: string): Observable<any> {
    const endpoint = `${this._api}/usuarios/${userId}/seguindo`;
    return this._http.get(endpoint);
  }

  public listFollowers(userId: string): Observable<any> {
    const endpoint = `${this._api}/usuarios/${userId}/seguidores`;
    return this._http.get(endpoint);
  }
}
