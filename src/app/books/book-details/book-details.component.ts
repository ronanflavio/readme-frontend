import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BOOK_DETAILS } from '../mock/book-details.mock';
import { BookDetails } from '../models/book-details.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @ViewChild('header') header!: ElementRef;

  public bookDetails!: BookDetails;

  constructor(
    private _location: Location
  ) { }

  ngOnInit(): void {
      this._getBookDetails();
  }

  public redirectBack(): void {
    this._location.back();
  }

  private _getBookDetails(): void {
    this.bookDetails = BOOK_DETAILS;
  }

}
