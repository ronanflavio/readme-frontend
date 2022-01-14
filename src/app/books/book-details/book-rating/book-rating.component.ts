import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent implements OnInit {

  @Input() value!: number;
  @Input() quantity!: number;

  constructor() { }

  ngOnInit(): void {
  }

  public getStarFill(currentValue: number): string {
    if (this.value >= (currentValue - 0.2)) {
      return 'star';
    } else if (this.value < currentValue && this.value > (currentValue - 1)) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }

}
