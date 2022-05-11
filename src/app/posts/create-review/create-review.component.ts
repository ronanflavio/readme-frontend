import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { BookDetails } from 'src/app/books/models/book-details.model';
import { BookService } from 'src/app/books/services/book.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/users/services/user.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {

  public book: BookDetails;
  public form: FormGroup;
  public finished: boolean;
  public stars = [1,2,3,4,5];
  public rate = 5;

  private _bookId: string;

  constructor(
    private _bookService: BookService,
    private _postService: PostService,
    private _authSerivce: AuthService,
    private _route: ActivatedRoute,
    private _location: Location,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required])
    });
    this._route.paramMap.subscribe((params) => {
      this._bookId = params.get('bookId');
      this._loadBookDetails();
    });
  }

  public back(): void {
    this._location.back();
  }

  public setRate(rate: number): void {
    this.rate = rate;
  }

  public getRateName(): string {
    switch (this.rate) {
      case 1: return 'Ruim';
      case 2: return 'Regular';
      case 3: return 'Bom';
      case 4: return 'Muito bom';
      case 5: return 'Excelente';
      default: return null;
    }
  }

  public finish(): void {
    if (this.form.valid) {
      this._postService.post(this._getBody())
        .subscribe({
          next: () => {
            this._router.navigate(['/']);
          },
          complete: () => {
            this.finished = true;
          }
        })
    }
  }

  private _loadBookDetails(): void {
    this._bookService.getBookDetails(this._bookId)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.book = response;
        }
      })
  }

  private _getBody(): any {
    return {
      livros: [this._bookId],
      descricao: this.form.controls['text'].value,
      nota: this.rate,
      tipoPostagem: 'RESENHA',
      usuarioPostagem: this._authSerivce.authUser.id
    }
  }
}
