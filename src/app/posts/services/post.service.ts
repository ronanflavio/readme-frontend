import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';
import { environment } from 'src/environments/environment';
import { POST_LIST } from '../mock/posts.mock';
import { Post, PostList } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _selectedBooks = new BehaviorSubject<Autocomplete[]>([]);
  private _api = environment.api + '/postagens/v1';

  constructor(
    private _http: HttpClient
  ) { }

  public getFeed(page: number): Observable<any> {
    // return of(POST_LIST).pipe(delay(500));
    const endpoint = this._api + `/postagens?pagina=${page}&tamanho=3`;
    return this._http.get(endpoint);
  }

  public getSelectedBooks(): Observable<Autocomplete[]> {
    return this._selectedBooks.asObservable();
  }

  public setSelectedBooks(value: Autocomplete[]): void {
    this._selectedBooks.next(value);
  }

  public post(body: any): Observable<any> {
    const endpoint = this._api + '/postagens';
    return this._http.post(endpoint, body);
  }
}
