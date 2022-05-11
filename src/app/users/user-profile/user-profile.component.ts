import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../models/user-profile.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public userProfile?: UserProfile;
  public selfProfile: boolean;

  private _userId?: string|null;

  constructor(
    private _userService: UserService,
    private _authService: AuthService,
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
      this._userService.getUser(this._userId)
        .subscribe(
          (res: UserProfile) => {
            this.userProfile = res;
            this.userProfile.urlFoto = `${environment.api}/${this.userProfile.urlFoto}`;
          }
        )
    }
  }

  private _setFollowingProperties(): void {
    this.userProfile.imFollowing = !this.userProfile.imFollowing;
    if (this.userProfile.imFollowing) {
      this.userProfile.seguidores++;
    } else {
      this.userProfile.seguidores--;
    }
  }

}
