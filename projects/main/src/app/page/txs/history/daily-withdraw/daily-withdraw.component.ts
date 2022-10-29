import { PaymentHistory } from '../history.component';
import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Timestamp } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { DailyPaymentApplicationService } from 'projects/shared/src/lib/services/student-accounts/daily-payments/daily-payment.application.service';
import { StudentAccountApplicationService } from 'projects/shared/src/lib/services/student-accounts/student-account.application.service';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-daily-withdraw',
  templateUrl: './daily-withdraw.component.html',
  styleUrls: ['./daily-withdraw.component.css'],
})
export class DailyWithdrawComponent implements OnInit {
  dailyWithdraw$: Observable<PaymentHistory | undefined> | undefined;

  constructor(
    private auth: Auth,
    private route: ActivatedRoute,
    private readonly studentAccApp: StudentAccountApplicationService,
    private readonly dailyPaymentApp: DailyPaymentApplicationService,
  ) {
    const user$ = authState(this.auth);
    const studentAccount$ = user$.pipe(mergeMap((user) => this.studentAccApp.getByUid$(user?.uid!)));
    const historyID$ = this.route.params.pipe(map((params) => params.history_id));
    this.dailyWithdraw$ = studentAccount$.pipe(mergeMap((account) => this.dailyPaymentApp.list$(account.id)));
  }

  ngOnInit(): void {}
}
