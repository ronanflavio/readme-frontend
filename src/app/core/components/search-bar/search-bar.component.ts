import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, finalize } from 'rxjs';
import { Autocomplete } from '../../models/autocomplete.model';
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  get search() { return this.form.controls['search']; }

  @Input() placeholder: string;

  @Output() onInputFocused = new EventEmitter<boolean>();
  @Output() onOptionSelected = new EventEmitter<Autocomplete>();

  public bookAutocomplete!: Autocomplete[];
  public inputFocused: boolean = false;
  public loading: boolean = false;
  public form: FormGroup = this._formBuilder.group({
    search: [null]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _searchBarService: SearchBarService
  ) {
    this.placeholder = 'Digite sua busca';
  }

  ngOnInit(): void {
    this._observeSearch();
  }

  public selectOption(event: Autocomplete): void {
    this.onOptionSelected.emit(event);
    this.search.setValue(null);
  }

  public onFocus(): void {
    this.inputFocused = true;
    this._emitInputFocusStatus();
  }

  public onBlur(): void {
    this.inputFocused = false;
    this._emitInputFocusStatus();
  }

  private _emitInputFocusStatus(): void {
    this.onInputFocused.emit(this.inputFocused);
  }

  private _observeSearch(): void {
    this.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe((term: string) => {
      if (term && term.length >= 3) {
        this._autocomplete(term);
      } else {
        this.bookAutocomplete = [];
      }
    })
  }

  private _autocomplete(term: string): void {
    this.loading = true;
    this._searchBarService.autocomplete(term)
      .pipe(finalize(() => this.loading = false))
      .subscribe((response: Autocomplete[]) => {
        this.bookAutocomplete = response
      });
  }
}
