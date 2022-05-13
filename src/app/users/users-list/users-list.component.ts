import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { SnackService } from 'src/app/core/services/snack.service';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../models/user-profile.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public title: string;
  public usersList: UserProfile[];
  public loading: boolean;

  private _userId: string;

  constructor(
    private _userService: UserService,
    private _snackService: SnackService,
    private _location: Location,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title = this._router.url.includes('/users/following')
      ? 'Seguindo'
      : 'Seguidores';
    this._route.paramMap.subscribe((params) => {
      this._userId = params.get('id');
      this._loadUsersList();
    });
  }

  public back(): void {
    this._location.back();
  }

  private _loadUsersList(): void {
    this.loading = true;
    const observable = this._router.url.includes('/users/following')
      ? this._userService.listFollowing(this._userId)
      : this._userService.listFollowers(this._userId);

    observable
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (response) => {
          this.usersList = response;
          this.usersList.forEach((user: UserProfile) => {
            user.urlFoto = `${environment.api}/${user.urlFoto}`;
          });
        },
        error: (error) => {
          console.error(error);
          this._snackService.error(SnackService.DEFAULT_ERROR_MESSAGE);
        }
      })
  }

}
