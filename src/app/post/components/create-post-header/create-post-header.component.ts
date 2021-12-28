import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-post-header',
  templateUrl: './create-post-header.component.html',
  styleUrls: ['./create-post-header.component.scss']
})
export class CreatePostHeaderComponent implements OnInit {

  @Input() iconBefore: string = '';
  @Input() iconNext: string = '';
  @Input() title: string = '';

  @Output() nextClicked = new EventEmitter();
  @Output() beforeClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public clickBefore(): void {
    this.beforeClicked.emit();
  }

  public clickNext(): void {
    this.nextClicked.emit();
  }

}
