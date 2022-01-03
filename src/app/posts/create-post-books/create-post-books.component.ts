import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post-books',
  templateUrl: './create-post-books.component.html',
  styleUrls: ['./create-post-books.component.scss']
})
export class CreatePostBooksComponent implements OnInit, OnDestroy {

  public selectedBooks: Autocomplete[] = [];

  protected destroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _router: Router,
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._subscribeSelectedBooks();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public onOptionSelected(event: Autocomplete): void {
    const index = this._getBookIndex(event);
    if (index < 0) {
      this.selectedBooks.push(event);
      this._postService.setSelectedBooks(this.selectedBooks);
    }
  }

  public onBookRemoved(event: Autocomplete): void {
    const index = this._getBookIndex(event);
    if (index >= 0) {
      this.selectedBooks.splice(index, 1);
      this._postService.setSelectedBooks(this.selectedBooks);
    }
  }

  public close(): void {
    this._router.navigate(['/']);
  }

  public goToMessage(): void {
    if (this.selectedBooks.length > 0) {
      this._router.navigate(['/post/create/message']);
    }
  }

  private _subscribeSelectedBooks(): void {
    this._postService.getSelectedBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: Autocomplete[]) => {
        this.selectedBooks = response;
      });
  }

  private _getBookIndex(book: Autocomplete): number {
    return this.selectedBooks.findIndex(i => i.id === book.id);
  }
}
