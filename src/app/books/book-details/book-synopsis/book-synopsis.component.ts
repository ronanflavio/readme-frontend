import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-synopsis',
  templateUrl: './book-synopsis.component.html',
  styleUrls: ['./book-synopsis.component.scss']
})
export class BookSynopsisComponent implements OnInit {

  @Input() synopsis!: string;

  public truncate: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this._prepareSynopsis();
  }

  private _prepareSynopsis(): void {
    if (this.synopsis) {
      this.truncate = this.synopsis.length > 200;
      this.synopsis = this.synopsis.replace(/\n/g, '<br>');
    }
  }

}
