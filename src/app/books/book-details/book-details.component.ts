import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor(
    private _location: Location,
    private _bookService: BookService
  ) { }

  ngOnInit(): void {
    this._getBookDetails();
  }

  public redirectBack(): void {
    this._location.back();
  }

  private _getBookDetails(): void {
    this._bookService.getBookDetails()
      .pipe(finalize(() => this.loading = false))
      .subscribe((response: BookDetails) => {
        this.bookDetails = response;
      });
  }

}
