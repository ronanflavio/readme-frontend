import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-books',
  templateUrl: './selected-books.component.html',
  styleUrls: ['./selected-books.component.scss']
})
export class SelectedBooksComponent implements OnInit {

  @Input() bookList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
