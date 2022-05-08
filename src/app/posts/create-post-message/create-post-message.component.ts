import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, ReplaySubject, takeUntil } from 'rxjs';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post-message',
  templateUrl: './create-post-message.component.html',
  styleUrls: ['./create-post-message.component.scss']
})
export class CreatePostMessageComponent implements OnInit, OnDestroy {

  public selectedBooks: Autocomplete[] = [];
  public finished: boolean = false;
  public form: FormGroup;

  protected destroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _router: Router,
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._subscribeSelectedBooks();
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public back(): void {
    this._router.navigate(['/post/create/books']);
  }

  public finish(): void {
    if (this.form.valid) {
      this._postService.post(this._getBody())
        .pipe(finalize(() => this.finished = true))
        .subscribe(
          () => {
            this._router.navigate(['/']);
          }
        );
    }
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

  private _getBody(): any {
    return {
      livros: this.selectedBooks.map(m => m.id),
      descricao: this.form.controls['text'].value,
      nota: null,
      tipoPostagem: 'RESENHA',
      usuarioPostagem: '61538413-d4fe-48a9-8450-9978b1221ae9'
    }
  }
}
