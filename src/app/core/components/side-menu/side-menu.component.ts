import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  public exiting: boolean = false;
  public menuItems = [
    { name: 'Perfil', icon: 'person', action: '' },
    { name: 'Estante', icon: 'auto_stories', action: '' },
    { name: 'Gêneros', icon: 'style', action: '' },
    { name: 'Favoritos', icon: 'favorite_outline', action: '' },
    { name: 'Itens salvos', icon: 'bookmark_outline', action: '' },
  ];

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public close(): void {
    this.closeSidenav.emit();
  }

  public logout(): void {
    this.exiting = true;
    this._authService.logout()
      .pipe(finalize(() => this.exiting = false))
      .subscribe(
        () => {
          this.close();
          this._router.navigate(['/users/login']);
        }
      );
  }

}
