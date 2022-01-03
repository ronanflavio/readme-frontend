import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';

@Component({
  selector: 'app-selected-books',
  templateUrl: './selected-books.component.html',
  styleUrls: ['./selected-books.component.scss']
})
export class SelectedBooksComponent implements OnInit {

  @Input() bookList: any = [];

  @Output() onBookRemoved = new EventEmitter<Autocomplete>();

  constructor() { }

  ngOnInit(): void {
  }

  public removeBook(event: Autocomplete): void {
    this.onBookRemoved.emit(event);
  }

}
