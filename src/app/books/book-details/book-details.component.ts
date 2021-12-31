import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import FastAverageColor from 'fast-average-color';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements AfterViewInit {

  @ViewChild('header') header!: ElementRef;

  public favorite: boolean = false;

  constructor(
    private _location: Location
  ) { }

  ngAfterViewInit(): void {
      this._setCoverBackground();
  }

  public redirectBack(): void {
    this._location.back();
  }

  private _setCoverBackground(): void {
    if (this.header) {
      const fac = new FastAverageColor();
      const cover = this.header.nativeElement.querySelector('.readme-book-cover');
      const image = this.header.nativeElement.querySelector('img');
      fac.getColorAsync(image)
        .then(color => {
          cover.style.backgroundColor = color.rgba;
          cover.style.color = color.isDark ? '#fff' : '#000';
        })
    }
  }

}
