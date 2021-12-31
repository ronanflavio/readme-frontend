import { Component, Input, OnInit } from '@angular/core';
import { BookInteraction } from '../../models/book-details.model';

@Component({
  selector: 'app-book-actions',
  templateUrl: './book-actions.component.html',
  styleUrls: ['./book-actions.component.scss']
})
export class BookActionsComponent implements OnInit {

  @Input() interaction!: BookInteraction;

  constructor() { }

  ngOnInit(): void {
  }

}
