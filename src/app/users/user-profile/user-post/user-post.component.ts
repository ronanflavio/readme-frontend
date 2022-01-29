import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  @Input() post: any;
  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

  public readMore(post: any): void {
    //
  }
}
