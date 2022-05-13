import { Component, Input, OnInit } from '@angular/core';
import { BookReview } from '../../models/book-details.model';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  @Input() review?: any;

  constructor() { }

  ngOnInit(): void {
  }

  public readMore(review: BookReview): void {
    review.truncate = false;
  }

}
