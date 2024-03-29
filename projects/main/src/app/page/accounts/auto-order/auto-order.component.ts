import { Order, OrderHistory, TxService } from '../../../models/txs/tx.service';
import { AutoOrderOnSubmitEvent } from '../../../view/accounts/auto-order/auto-order.component';
import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { AutoOrderChange, StudentAccount } from '@local/common';
import { User } from 'firebase/auth';
import { AutoOrderChangeApplicationService } from 'projects/shared/src/lib/services/auto-order-changes/auto-order-change.application.service';
import { StudentAccountApplicationService } from 'projects/shared/src/lib/services/student-accounts/student-account.application.service';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-auto-order',
  templateUrl: './auto-order.component.html',
  styleUrls: ['./auto-order.component.css'],
})
export class AutoOrderComponent implements OnInit {
  user$: Observable<User | null> | undefined;
  studentAccount$: Observable<StudentAccount> | undefined;
  autoOrder$: Observable<boolean> | undefined;
  orders$: Observable<Order[]> | undefined;
  histories$: Observable<OrderHistory[]> | undefined;

  constructor(
    private auth: Auth,
    private readonly studentAccApp: StudentAccountApplicationService,
    private readonly txService: TxService,
    private readonly autoOrderChangeApp: AutoOrderChangeApplicationService,
  ) {
    this.user$ = authState(this.auth);
    this.studentAccount$ = this.user$.pipe(mergeMap((user) => this.studentAccApp.getByUid$(user?.uid!)));
    this.autoOrder$ = this.studentAccount$.pipe(map((account) => account.auto_order));
    this.orders$ = this.studentAccount$.pipe(mergeMap((account) => this.txService.listAutoOrders$(account)));
    this.histories$ = this.studentAccount$.pipe(mergeMap((account) => this.txService.listAutoHistories$(account)));
  }

  ngOnInit(): void {}

  onSubmit($event: AutoOrderOnSubmitEvent) {
    this.autoOrderChangeApp.create(new AutoOrderChange({ student_account_id: $event.studentAccountID, enabled: $event.autoOrder }));
  }
}
