import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavOpened = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public openSidenav(): void {
    this.sidenavOpened.emit();
  }

}
