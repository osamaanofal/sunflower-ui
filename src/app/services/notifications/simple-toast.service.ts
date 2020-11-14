import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppToastMessage } from 'src/app/model/app-toast-message';

@Injectable({
  providedIn: 'root'
})
export class SimpleToastService {

  constructor(private _snackBar: MatSnackBar) {

  }

  public showToast(app: AppToastMessage) {
    this._snackBar.open(app.message, app.action, {
      duration: app.duration || 5000,
      panelClass: app.panelClass
    });
  }
}
