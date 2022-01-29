import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserProfile } from '../models/user-profile.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public userProfile?: UserProfile;

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
      this._loadUserProfile();
    });
  }

  public back(): void {
    this._location.back();
  }

  private _loadUserProfile(): void {
    if (this._userId) {
      this._userService.getUser(this._userId)
        .subscribe(
          (res: UserProfile) => {
            this.userProfile = res;
            console.log(this.userProfile);
          }
        )
    }
  }

}
