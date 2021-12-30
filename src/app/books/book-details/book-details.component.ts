import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import FastAverageColor from 'fast-average-color';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements AfterViewInit {

  @ViewChild('header') header!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
      this._setCoverBackground();
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
