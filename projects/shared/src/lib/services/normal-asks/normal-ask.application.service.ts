import { NormalAskService } from './normal-ask.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NormalAsk } from '@local/common';
import { LoadingDialogService } from 'ng-loading-dialog';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NormalAskApplicationService {
  constructor(
    private readonly normalAsk: NormalAskService,
    private readonly loadingDialog: LoadingDialogService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) {}

  async create(data: NormalAsk) {
    const dialogRef = this.loadingDialog.open('Sending Ask');
    try {
      this.normalAsk.create(data);
    } catch {
      this.snackBar.open('Error has occurred', undefined, {
        duration: 6000,
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully Ask', undefined, {
      duration: 6000,
    });

    await this.router.navigate(['txs']);
  }

  get$(uid: string, id: string) {
    return this.normalAsk.get$(id).pipe(map((param) => (param?.account_id == uid ? param : undefined)));
  }

  list$() {
    return this.normalAsk.list$();
  }

  listUid$(uid: string) {
    return this.normalAsk.list$().pipe(map((params) => params.filter((param) => param.account_id == uid)));
  }
}
