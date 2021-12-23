import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends Component {

  @ViewChild('sidenav') sidenav: MatSidenav;

  public title = 'Read.me';

  public close() {
    this.sidenav.close();
  }

}
