import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autocomplete } from 'src/app/core/models/autocomplete.model';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public optionSelected(option: Autocomplete): void {
    this._router.navigate([`books/${option.id}/details`]);
  }

}
