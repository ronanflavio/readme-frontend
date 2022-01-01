import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { BOOK_DETAILS } from '../mock/book-details.mock';
import { BookDetails } from '../models/book-details.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBookDetails(): Observable<BookDetails> {
    return of(BOOK_DETAILS).pipe(delay(1000));
  }
}
