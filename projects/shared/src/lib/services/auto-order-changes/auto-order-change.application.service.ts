import { AutoOrderChangeService } from './auto-order-change.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutoOrderChange } from '@local/common';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class AutoOrderChangeApplicationService {
  constructor(
    private readonly autoOrderChange: AutoOrderChangeService,
    private readonly loadingDialog: LoadingDialogService,
    private readonly snackBar: MatSnackBar,
  ) {}
  async create(data: AutoOrderChange) {
    const dialogRef = this.loadingDialog.open('Requesting Auto Order Change');
    try {
      this.autoOrderChange.create(data);
    } catch {
      this.snackBar.open('Error has occurred', undefined, {
        duration: 6000,
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully Update Auto Order Setting. It takes a minute to reflect', undefined, {
      duration: 6000,
    });
  }
}
