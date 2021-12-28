import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  public title = 'Read.me';
  public showNavbar: boolean = true;
  public showFooter: boolean = true;
  public showCreatePostButton: boolean = true;

  private _hideNavbarWhen: string[] = [
    '/post/create/books',
    '/post/create/message',
  ];

  private _hideFooterWhen: string[] = [
    '/post/create/books',
    '/post/create/message',
  ];

  private _hideCreatePostButtonWhen: string[] = [
    '/post/create/books',
    '/post/create/message',
  ];

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void {
      this._subscribeRouter();
  }

  public close() {
    this.sidenav.close();
  }

  private _subscribeRouter(): void {
    this._router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.showNavbar = !this._hideNavbarWhen.includes(value.url);
        this.showFooter = !this._hideFooterWhen.includes(value.url);
        this.showCreatePostButton = !this._hideCreatePostButtonWhen.includes(value.url);
      }
    })
  }

}
