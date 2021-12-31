import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import FastAverageColor from 'fast-average-color';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.scss']
})
export class BookCoverComponent implements AfterViewInit {

  @ViewChild('cover') cover!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this._setCoverBackground();
  }

  private _setCoverBackground(): void {
    if (this.cover && this.image) {
      const fac = new FastAverageColor();
      const cover = this.cover.nativeElement;
      const image = this.image.nativeElement.querySelector('img');
      fac.getColorAsync(image)
        .then(color => {
          cover.style.backgroundColor = color.rgba;
          cover.style.color = color.isDark ? '#fff' : '#000';
        })
    }
  }

}
