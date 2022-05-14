import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _api = environment.api + '/livros/v1';;

  constructor(
    private _http: HttpClient
  ) { }

  getBookDetails(id: string): Observable<any> {
    const endpoint = `${this._api}/livros/${id}`;
    return this._http.get(endpoint);
  }
}
