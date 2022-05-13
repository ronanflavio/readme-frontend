import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, take } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackService } from 'src/app/core/services/snack.service';
import { Post, PostBook, PostList } from 'src/app/posts/models/post.model';
import { PostService } from 'src/app/posts/services/post.service';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../models/user-profile.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public loading: boolean = false;
  public userProfile?: UserProfile;
  public selfProfile: boolean;
  public userPosts: Post[] = [];

  private _userId?: string|null;

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _authService: AuthService,
    private _snackService: SnackService,
    private _location: Location,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      this._userId = userId
        ? userId
        : this._authService.authUser.id;
      this.selfProfile = this._userId === this._authService.authUser.id;
      this._loadUserProfile();
      this._loadUserPosts();
    });
  }

  public back(): void {
    this._location.back();
  }

  public toggleFollow(): void {
    this._setFollowingProperties();
    this._userService.follow(this._authService.authUser.id, this._userId)
      .pipe(take(1))
      .subscribe({
        error: (error) => {
          this._setFollowingProperties();
          console.error(error)
        }
      });
  }

  private _loadUserProfile(): void {
    if (this._userId) {
      this.loading = true;
      this._userService.getUser(this._userId, this._authService.authUser.id)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: (response: UserProfile) => {
            this.userProfile = response;
            this.userProfile.urlFoto = `${environment.api}/${this.userProfile.urlFoto}`;
          },
          error: (error) => {
            this._snackService.error(SnackService.DEFAULT_ERROR_MESSAGE);
            console.error(error);
          }
        })
    }
  }

  private _loadUserPosts(): void {
    if (this._userId) {
      this.loading = true;
      this._postService.getFromUser(this._userId)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: (response: PostList) => {
            this._prepareAndAppendPosts(response.postagens);
          },
          error: (error) => {
            this._snackService.error(SnackService.DEFAULT_ERROR_MESSAGE);
            console.error(error);
          }
        })
    }
  }

  private _prepareAndAppendPosts(posts: Post[]): void {
    posts.forEach((post: Post) => {
      post.truncate = post.descricao.length > 200;
      post.usuario.urlFoto = `${environment.api}/${post.usuario.urlFoto}`;
      post.livros.forEach((livro: PostBook) => {
        livro.fotoUrl = `${environment.api}/${livro.fotoUrl}`;
      })
      this.userPosts.push(post);
    });
  }

  private _setFollowingProperties(): void {
    this.userProfile.estouSeguindo = !this.userProfile.estouSeguindo;
    if (this.userProfile.estouSeguindo) {
      this.userProfile.seguidores++;
    } else {
      this.userProfile.seguidores--;
    }
  }

}
