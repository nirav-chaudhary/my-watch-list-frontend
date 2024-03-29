import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef
} from '@angular/material/snack-bar';

@Injectable({
  providedIn:'root'
})
export class NotificationService {

  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  snackBarAutoHide = '5000';

  constructor(private snackBar: MatSnackBar) { }


  openSnackBar(message,msgType) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    if(msgType==='msg'){
      this.snackBarConfig.panelClass = ['mat-toolbar', 'mat-primary'];
    }else{
      this.snackBarConfig.panelClass = ['mat-toolbar', 'mat-warn'];
    }
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
}

}