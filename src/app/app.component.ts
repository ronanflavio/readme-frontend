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

  private _showNavbarWhen: string[] = [
    '/feed',
  ];

  private _showFooterWhen: string[] = [
    '/feed',
    '/books/',
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
        this.showNavbar = this._showNavbarWhen.includes(value.urlAfterRedirects);
        this.showFooter = this._showFooterWhen.findIndex(e => value.urlAfterRedirects.includes(e)) >= 0;
      }
    })
  }

}
