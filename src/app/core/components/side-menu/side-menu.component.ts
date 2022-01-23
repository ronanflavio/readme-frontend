import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, ReplaySubject, takeUntil } from 'rxjs';
import { UserData } from '../../models/user-data.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {

  @Output() closeSidenav = new EventEmitter();

  public loggingOut: boolean = false;
  public user!: UserData;
  public menuItems = [
    { name: 'Perfil', icon: 'person', action: '/users/profile' },
    { name: 'Estante', icon: 'auto_stories', action: '' },
    { name: 'Gêneros', icon: 'style', action: '' },
    { name: 'Favoritos', icon: 'favorite_outline', action: '' },
    { name: 'Itens salvos', icon: 'bookmark_outline', action: '' },
  ];

  protected destroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._getUserData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public close(): void {
    this.closeSidenav.emit();
  }

  public logout(): void {
    this.loggingOut = true;
    this._authService.logout()
      .pipe(finalize(() => this.loggingOut = false))
      .subscribe(
        () => {
          this.close();
          this._router.navigate(['/users/login']);
        }
      );
  }

  public menuClicked(action: string): void {
    this.close();
    this._router.navigate([action]);
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
