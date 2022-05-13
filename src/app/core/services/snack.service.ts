import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../components/snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  public static DEFAULT_ERROR_MESSAGE = 'Ops. Algo deu errado. Tente novamente mais tarde.';

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
