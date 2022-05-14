import { Component, Input, OnInit } from '@angular/core';
import { Post, PostUser } from 'src/app/posts/models/post.model';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  @Input() post: Post;
  @Input() user: PostUser;

  constructor() { }

  ngOnInit(): void {
  }

  public readMore(post: any): void {
    //
  }
}
