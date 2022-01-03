import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { BOOK_AUTOCOMPLETE } from '../mock/book-autocomplete.mock';
import { Autocomplete } from '../models/autocomplete.model';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor() { }

  public autocomplete(term: string): Observable<Autocomplete[]> {
    return of(BOOK_AUTOCOMPLETE).pipe(delay(500));
  }
}
