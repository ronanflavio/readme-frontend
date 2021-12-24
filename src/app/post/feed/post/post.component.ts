import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

  public readMore(post: any): void {
    post.truncate = false;
  }

}
