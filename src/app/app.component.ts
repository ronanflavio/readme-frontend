import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    e.preventDefault();
    this.deferredPrompt = e;
    this.showInstallButton = true;
  }

  public title = 'Read.me';
  public showNavbar: boolean = true;
  public showFooter: boolean = true;
  public isOnline: boolean = true;
  public onlineStatusCheck = OnlineStatusType;
  public status = OnlineStatusType.ONLINE
  public deferredPrompt: any;
  public showInstallButton = false;

  private _showNavbarWhen: string[] = [
    '/feed',
  ];

  private _showFooterWhen: string[] = [
    '/feed',
    '/books/',
  ];

  constructor(
    private _router: Router,
    private _onlineStatusService: OnlineStatusService
  ) { }

  ngOnInit(): void {
    this._subscribeRouter();
    this._onlineStatusService.status.subscribe(
      (status: OnlineStatusType) => {
        this.status = status;
      }
    )
  }

  public close() {
    this.sidenav.close();
  }

  public addPwaToHomeScreen(): void {
    this.showInstallButton = false;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice
      .then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

  private _subscribeRouter(): void {
    this._router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.showNavbar = this._showNavbarWhen.includes(value.urlAfterRedirects);
        this.showFooter = this._showFooterWhen.findIndex(e => value.urlAfterRedirects.includes(e)) >= 0;
      }
    });
  }

}
