import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-actions',
  templateUrl: './book-actions.component.html',
  styleUrls: ['./book-actions.component.scss']
})
export class BookActionsComponent implements OnInit {

  public favorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
