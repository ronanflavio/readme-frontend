import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
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
  public loading: boolean = true;

  private _bookId: string;

  constructor(
    private _location: Location,
    private _route: ActivatedRoute,
    private _bookService: BookService
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this._bookId = params.get('id');
      this._getBookDetails();
    })
  }

  public redirectBack(): void {
    this._location.back();
  }

  private _getBookDetails(): void {
    this._bookService.getBookDetails(this._bookId)
      .pipe(finalize(() => this.loading = false))
      .subscribe((response: BookDetails) => {
        this.bookDetails = this._prepareBookReviews(response);
      });
  }

  private _prepareBookReviews(book: BookDetails): BookDetails {
    book.reviews?.forEach((review: any) => {
      review.truncate = review.message.length > 200;
    });
    return book;
  }

}
