import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Post, PostBook } from 'src/app/posts/models/post.model';
import { PostService } from 'src/app/posts/services/post.service';
import { environment } from 'src/environments/environment';
import { BookDetails } from '../models/book-details.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @ViewChild('header') header!: ElementRef;

  public bookDetails!: BookDetails;
  public bookPosts: Post[] = [];
  public loading: boolean = true;

  private _bookId: string;

  constructor(
    private _location: Location,
    private _route: ActivatedRoute,
    private _bookService: BookService,
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this._bookId = params.get('id');
      this._getBookDetails();
      this._getBookPosts();
    });
  }

  public redirectBack(): void {
    this._location.back();
  }

  private _getBookDetails(): void {
    this._bookService.getBookDetails(this._bookId)
      .pipe(finalize(() => this.loading = false))
      .subscribe((response: BookDetails) => {
        this.bookDetails = this._prepareBookDetails(response);
      });
  }

  private _getBookPosts(): void {
    this._postService.getFromBook(this._bookId)
      .pipe(finalize(() => this.loading = false))
      .subscribe((response) => {
        this._prepareAndAppendPosts(response.postagens);
      });
  }

  private _prepareBookDetails(book: BookDetails): BookDetails {
    book.fotoUrl = `${environment.api}/${book.fotoUrl}`;
    book.reviews?.forEach((review: any) => {
      review.truncate = review.message.length > 200;
    });
    return book;
  }

  private _prepareAndAppendPosts(posts: Post[]): void {
    posts.forEach((post: Post) => {
      post.truncate = post.descricao.length > 200;
      post.usuario.urlFoto = `${environment.api}/${post.usuario.urlFoto}`;
      post.livros.forEach((livro: PostBook) => {
        livro.fotoUrl = `${environment.api}/${livro.fotoUrl}`;
      })
      this.bookPosts.push(post);
    });
  }

}
