import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-header',
  templateUrl: './generic-header.component.html',
  styleUrls: ['./generic-header.component.scss']
})
export class GenericHeaderComponent implements OnInit {

  @Input() iconBefore: string = '';
  @Input() iconNext: string = '';
  @Input() title: string = '';

  @Output() nextClicked = new EventEmitter();
  @Output() beforeClicked = new EventEmitter();

  public onTop: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this._listenWindowScroll();
  }

  public clickBefore(): void {
    this.beforeClicked.emit();
  }

  public clickNext(): void {
    this.nextClicked.emit();
  }

  private _listenWindowScroll(): void {
    window.addEventListener('scroll', this._scroll, true);
  }

  private _scroll = (event: any): void => {
    const scrollTop = document.getElementsByTagName(event.target.tagName)[0].scrollTop;
    this.onTop = scrollTop <= 50;
  }

}
