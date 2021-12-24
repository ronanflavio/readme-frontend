import { Component, OnInit } from '@angular/core';
import { POST_LIST } from 'src/app/core/mock/posts.mock';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public postItems: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this._getPosts();
    this._preparePosts();
  }

  private _getPosts(): void {
    this.postItems = POST_LIST;
  }

  private _preparePosts(): void {
    this.postItems.forEach((post: any) => {
      post.truncate = post.message.length > 200;
    });
  }

}
