import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public inputFocused: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onInputFocused(event: boolean): void {
    this.inputFocused = event;
  }

}
