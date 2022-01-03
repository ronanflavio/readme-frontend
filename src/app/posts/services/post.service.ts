import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';
import { POST_LIST } from '../mock/posts.mock';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _selectedBooks = new BehaviorSubject<Autocomplete[]>([]);

  constructor() { }

  public getFeed(): Observable<Post[]> {
    return of(POST_LIST).pipe(delay(1000));
  }

  public getSelectedBooks(): Observable<Autocomplete[]> {
    return this._selectedBooks.asObservable();
  }

  public setSelectedBooks(value: Autocomplete[]): void {
    this._selectedBooks.next(value);
  }
}
