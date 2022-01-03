import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post-message',
  templateUrl: './create-post-message.component.html',
  styleUrls: ['./create-post-message.component.scss']
})
export class CreatePostMessageComponent implements OnInit, OnDestroy {

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

  public back(): void {
    this._router.navigate(['/post/create/books']);
  }

  public finish(): void {
    //
  }

  private _subscribeSelectedBooks(): void {
    this._postService.getSelectedBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: Autocomplete[]) => {
        this.selectedBooks = response;
        if (!this.selectedBooks.length) {
          this._router.navigate(['/post/create/books']);
        }
      });
  }
}
