import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent implements OnInit {

  @Input() rating!: number;

  constructor() { }

  ngOnInit(): void {
  }

  public getStarFill(currentRating: number): string {
    if (this.rating >= (currentRating - 0.1)) {
      return 'star';
    } else if (this.rating < currentRating && this.rating > (currentRating - 1)) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }

}
