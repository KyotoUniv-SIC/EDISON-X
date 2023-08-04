import { Order, OrderHistory, TxService } from '../../models/txs/tx.service';
import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { StudentAccount } from '@local/common';
import { StudentAccountApplicationService } from 'projects/shared/src/lib/services/student-accounts/student-account.application.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.css'],
})
export class TxsComponent implements OnInit {
  studentAccount$: Observable<StudentAccount> | undefined;
  orders$: Observable<Order[]> | undefined;
  histories$: Observable<OrderHistory[]> | undefined;

  constructor(private auth: Auth, private readonly studentAccApp: StudentAccountApplicationService, private readonly txService: TxService) {
    const user$ = authState(this.auth);
    this.studentAccount$ = user$.pipe(mergeMap((user) => this.studentAccApp.getByUid$(user?.uid!)));
    this.orders$ = this.studentAccount$.pipe(mergeMap((account) => this.txService.listOrders$(account)));
    this.histories$ = this.studentAccount$.pipe(mergeMap((account) => this.txService.listHistories$(account)));
  }

  ngOnInit(): void {}
}
