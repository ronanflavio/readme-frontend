import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, PostBook, PostList } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public loading: boolean = false;
  public postItems: Post[] = [];

  private _currentPage = 0;
  private _totalPages: number;

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._getPosts();
  }

  public loadMore(): void {
    if (!this._totalPages || this._totalPages > this._currentPage) {
      this._getPosts(false);
    }
  }

  private _getPosts(setLoading: boolean = true): void {
    this.loading = setLoading;
    this._postService.getFeed(this._currentPage + 1)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        (response: PostList) => {
          this._currentPage = response.pagina;
          this._totalPages = response.paginas;
          this._prepareAndAppendPosts(response.postagens);
        }
      );
  }

  private _prepareAndAppendPosts(posts: Post[]): void {
    posts.forEach((post: Post) => {
      post.truncate = post.descricao.length > 200;
      post.usuario.urlFoto = `${environment.api}/${post.usuario.urlFoto}`;
      post.livros.forEach((livro: PostBook) => {
        livro.fotoUrl = `${environment.api}/${livro.fotoUrl}`;
      })
      this.postItems.push(post);
    });
  }

}
