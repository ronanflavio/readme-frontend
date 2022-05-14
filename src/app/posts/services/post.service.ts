import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';
import { environment } from 'src/environments/environment';

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

  public getFromUser(userId: string): Observable<any> {
    const endpoint = `${this._api}/postagens?pagina=1&tamanho=10&idUsuario=${userId}`;
    return this._http.get(endpoint);
  }

  public getFromBook(bookId: string): Observable<any> {
    const endpoint = `${this._api}/postagens?pagina=1&tamanho=10&idLivro=${bookId}`;
    return this._http.get(endpoint);
  }
}
