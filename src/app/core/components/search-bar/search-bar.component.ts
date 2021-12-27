import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() placeholder: string;
  @Output() onInputFocused = new EventEmitter<boolean>();

  public inputFocused: boolean = false;

  constructor() {
    this.placeholder = 'Digite sua busca';
  }

  ngOnInit(): void {
  }

  onFocus(): void {
    this.inputFocused = true;
    this.emitInputFocusStatus();
  }

  onBlur(): void {
    this.inputFocused = false;
    this.emitInputFocusStatus();
  }

  private emitInputFocusStatus(): void {
    this.onInputFocused.emit(this.inputFocused);
  }

}
