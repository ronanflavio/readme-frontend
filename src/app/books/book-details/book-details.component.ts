import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  @ViewChild('header') header!: ElementRef;

  public favorite: boolean = false;
  public rating: number = 4.9;

  constructor(
    private _location: Location
  ) { }

  public redirectBack(): void {
    this._location.back();
  }

}
