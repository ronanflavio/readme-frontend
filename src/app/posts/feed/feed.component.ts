import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public loading: boolean = false;
  public postItems: Post[] = [];

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._getPosts();
  }

  private _getPosts(): void {
    this.loading = true;
    this._postService.getFeed()
      .pipe(finalize(() => this.loading = false))
      .subscribe((response: Post[]) => {
        this.postItems = this._preparePosts(response);
      });
  }

  private _preparePosts(posts: Post[]): Post[] {
    posts.forEach((post: any) => {
      post.truncate = post.message.length > 200;
    });
    return posts;
  }

}
