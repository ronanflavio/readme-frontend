import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

  public readMore(post: any): void {
    post.truncate = false;
  }

}
