import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  public menuItems = [
    { name: 'Perfil', icon: 'person', action: '' },
    { name: 'Estante', icon: 'auto_stories', action: '' },
    { name: 'Gêneros', icon: 'style', action: '' },
    { name: 'Favoritos', icon: 'favorite_outline', action: '' },
    { name: 'Itens salvos', icon: 'bookmark_outline', action: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

  public close(): void {
    this.closeSidenav.emit();
  }

}
