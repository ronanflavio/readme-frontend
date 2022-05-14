import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, ReplaySubject, takeUntil } from 'rxjs';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackService } from 'src/app/core/services/snack.service';
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
  public loading = false;

  protected destroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _router: Router,
    private _snackService: SnackService,
    private _postService: PostService,
    private _authSerivce: AuthService
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
      this.loading = true;
      this._postService.post(this._getBody())
        .pipe(
          finalize(() => {
            this.finished = true;
            this.loading = false;
          })
        )
        .subscribe({
          next: () => {
            setTimeout(() => {
              this._router.navigate(['/']);
            }, 2000);
          },
          error: (error) => {
            console.error(error);
            this._router.navigate(['/']);
            this._snackService.error(SnackService.DEFAULT_ERROR_MESSAGE);
          }
        });
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
      tipoPostagem: 'PUBLICACAO',
      usuarioPostagem: this._authSerivce.authUser.id
    }
  }
}
