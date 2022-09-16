import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Timestamp } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { RenewableBidHistory } from '@local/common';
import { RenewableBidHistoryApplicationService } from 'projects/shared/src/lib/services/renewable-bid-histories/renewable-bid-history.application.service';
import { StudentAccountApplicationService } from 'projects/shared/src/lib/services/student-accounts/student-account.application.service';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  renewableBid$: Observable<RenewableBidHistory | undefined> | undefined;
  createdAt$: Observable<Date> | undefined;
  bidCreatedAt$: Observable<Date> | undefined;

  constructor(
    private auth: Auth,
    private route: ActivatedRoute,
    private readonly studentAccApp: StudentAccountApplicationService,
    private readonly renewableBidApp: RenewableBidHistoryApplicationService,
  ) {
    const user$ = authState(this.auth);
    const studentAccount$ = user$.pipe(mergeMap((user) => this.studentAccApp.getByUid$(user?.uid!)));
    const historyID$ = this.route.params.pipe(map((params) => params.history_id));
    this.renewableBid$ = combineLatest([studentAccount$, historyID$]).pipe(
      mergeMap(([studentAccount, historyID]) => this.renewableBidApp.get$(studentAccount.id, historyID)),
    );
    this.createdAt$ = this.renewableBid$.pipe(map((bid) => (bid?.created_at as Timestamp).toDate()));
    this.bidCreatedAt$ = this.renewableBid$.pipe(map((bid) => (bid?.bid_created_at as Timestamp).toDate()));
  }

  ngOnInit(): void {}
}
