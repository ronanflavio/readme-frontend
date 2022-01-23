import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { UserData } from '../../models/user-data.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavOpened = new EventEmitter();

  public user!: UserData;

  protected destroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._getUserData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public openSidenav(): void {
    this.sidenavOpened.emit();
  }

  private _getUserData(): void {
    this._authService.getUserData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res: UserData) => {
          this.user = res;
        }
      );
  }

}
