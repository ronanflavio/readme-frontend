import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../components/snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(
    private _snack: MatSnackBar
  ) { }

  public success(message: string, duration: number = 5000): void {
    this._snack.openFromComponent(SnackComponent, {
      data: { message: message, type: 'success' },
      duration: duration,
    });
  }

  public info(message: string, duration: number = 5000): void {
    this._snack.openFromComponent(SnackComponent, {
      data: { message: message, type: 'info' },
      duration: duration,
    });
  }

  public error(message: string, duration: number = 5000): void {
    this._snack.openFromComponent(SnackComponent, {
      data: { message: message, type: 'error' },
      duration: duration,
    });
  }
}
