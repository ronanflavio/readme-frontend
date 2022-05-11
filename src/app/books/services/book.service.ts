import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BOOK_DETAILS } from '../mock/book-details.mock';
import { BookDetails } from '../models/book-details.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _api = environment.api + '/livros/v1';;

  constructor(
    private _http: HttpClient
  ) { }

  getBookDetails(id: string): Observable<any> {
    // return of(BOOK_DETAILS).pipe(delay(1000));
    const endpoint = `${this._api}/livros/${id}`;
    return this._http.get(endpoint);
  }
}
