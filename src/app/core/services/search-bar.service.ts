import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BOOK_AUTOCOMPLETE } from '../mock/book-autocomplete.mock';
import { Autocomplete } from '../models/autocomplete.model';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  private _api = environment.api + '/livros/v1';

  constructor(
    private _http: HttpClient
  ) { }

  public autocomplete(term: string): Observable<any> {
    // Building Microservice
    // Implementando Domain-Driven Design
    const endpoint = this._api + '/livros?nomeLivro=' + term;
    return this._http.get(endpoint);
  }
}
