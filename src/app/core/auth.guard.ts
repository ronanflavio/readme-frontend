import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  public canActivate(): boolean {
    if (this._authService.token) {
      return true;
    }
    this._router.navigate(['/users/login']);
    return false;
  }
}
