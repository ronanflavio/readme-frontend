import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';

@Component({
  selector: 'app-create-post-books',
  templateUrl: './create-post-books.component.html',
  styleUrls: ['./create-post-books.component.scss']
})
export class CreatePostBooksComponent implements OnInit {

  public selectedBooks: Autocomplete[] = [];

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onOptionSelected(event: Autocomplete): void {
    const index = this._getBookIndex(event);
    if (index < 0) {
      this.selectedBooks.push(event);
    }
  }

  public onBookRemoved(event: Autocomplete): void {
    const index = this._getBookIndex(event);
    if (index >= 0) {
      this.selectedBooks.splice(index, 1);
    }
  }

  public close(): void {
    this._router.navigate(['/']);
  }

  public goToMessage(): void {
    this._router.navigate(['/post/create/message']);
  }

  private _getBookIndex(book: Autocomplete): number {
    return this.selectedBooks.findIndex(i => i.id === book.id);
  }
}
