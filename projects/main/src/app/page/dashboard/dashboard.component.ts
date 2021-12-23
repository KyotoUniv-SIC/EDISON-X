import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Timestamp } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Balance } from '@local/common';
import { BalanceApplicationService } from 'projects/shared/src/lib/services/student-accounts/balances/balance.application.service';
import { DailyUsageApplicationService } from 'projects/shared/src/lib/services/student-accounts/daily-usages/daily-usage.application.service';
import { StudentAccountApplicationService } from 'projects/shared/src/lib/services/student-accounts/student-account.application.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  balances$: Observable<Balance> | undefined;
  totalUsage$: Observable<number> | undefined;
  usages$: Observable<number[]> | undefined;
  usagesPreviousYear$: Observable<number[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly balanceApp: BalanceApplicationService,
    private readonly dailyUsageApp: DailyUsageApplicationService,
  ) {
    const accountID = getAuth().currentUser?.uid;
    if (!accountID) {
      return;
    }

    this.balances$ = this.balanceApp.list$(accountID).pipe(map((balances) => balances[0]));

    const usageList$ = this.dailyUsageApp.list$(accountID);
    let first = new Date();
    first.setDate(1);
    first.setHours(0, 0, 0, 0);
    this.totalUsage$ = usageList$.pipe(
      map((usages) => {
        let count = 0;
        for (const usage of usages) {
          if ((usage.created_at as Timestamp).toDate() > first) {
            count += usage.amount_kwh;
          }
        }
        return count;
      }),
    );
    this.usages$ = usageList$.pipe(
      map((usages) => usages.filter((usage) => (usage.created_at as Timestamp).toDate() > first).map((usage) => usage.amount_kwh)),
    );
    let lastYearFirst = new Date();
    lastYearFirst.setFullYear(lastYearFirst.getFullYear() - 1);
    lastYearFirst.setHours(0, 0, 0, 0);
    let lastYearEnd = lastYearFirst;
    lastYearEnd.setMonth(lastYearEnd.getMonth() - 1);
    this.usagesPreviousYear$ = usageList$.pipe(
      map((usages) =>
        usages
          .filter(
            (usage) => (usage.created_at as Timestamp).toDate() > lastYearFirst && (usage.created_at as Timestamp).toDate() < lastYearEnd,
          )
          .map((usage) => usage.amount_kwh),
      ),
    );
  }

  ngOnInit(): void {}
}
