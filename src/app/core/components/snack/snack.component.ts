import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snack: MatSnackBarRef<SnackComponent>
  ) { }

  public close(): void {
    this.snack.dismiss();
  }

}
