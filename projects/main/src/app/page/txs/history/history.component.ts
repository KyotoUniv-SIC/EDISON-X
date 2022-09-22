import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Timestamp } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { StudentAccount } from '@local/common';
import { NormalAskHistoryApplicationService } from 'projects/shared/src/lib/services/normal-ask-histories/normal-ask-history.application.service';
import { NormalAskApplicationService } from 'projects/shared/src/lib/services/normal-asks/normal-ask.application.service';
import { NormalBidHistoryApplicationService } from 'projects/shared/src/lib/services/normal-bid-histories/normal-bid-history.application.service';
import { NormalBidApplicationService } from 'projects/shared/src/lib/services/normal-bids/normal-bid.application.service';
import { PrimaryBidApplicationService } from 'projects/shared/src/lib/services/primary-bids/primary-bid.application.service';
import { RenewableAskHistoryApplicationService } from 'projects/shared/src/lib/services/renewable-ask-histories/renewable-ask-history.application.service';
import { RenewableAskApplicationService } from 'projects/shared/src/lib/services/renewable-asks/renewable-ask.application.service';
import { RenewableBidHistoryApplicationService } from 'projects/shared/src/lib/services/renewable-bid-histories/renewable-bid-history.application.service';
import { RenewableBidApplicationService } from 'projects/shared/src/lib/services/renewable-bids/renewable-bid.application.service';
import { AvailableBalanceApplicationService } from 'projects/shared/src/lib/services/student-accounts/available-balances/available-balance.application.service';
import { InsufficientBalanceApplicationService } from 'projects/shared/src/lib/services/student-accounts/insufficient-balances/insufficient-balance.application.service';
import { StudentAccountApplicationService } from 'projects/shared/src/lib/services/student-accounts/student-account.application.service';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export interface Order {
  id: string;
  date: Date;
  utokenAmount: string;
  ujpyPrice: string;
  isSolar: boolean;
  isBid: boolean;
}

export interface History {
  id: string;
  date: Date;
  utokenAmount: string;
  ujpyPrice: string;
  ujpyContractPrice: string;
  isAccepted: boolean;
  isSolar: boolean;
  isBid: boolean;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  studentAccount$: Observable<StudentAccount> | undefined;
  uupxAmount$: Observable<number> | undefined;
  uspxAmount$: Observable<number> | undefined;
  orders$: Observable<Order[]> | undefined;
  histories$: Observable<History[]> | undefined;

  constructor(
    private auth: Auth,
    private route: ActivatedRoute,
    private readonly studentAccApp: StudentAccountApplicationService,
    private readonly availableBalanceApp: AvailableBalanceApplicationService,
    private readonly insufficientBalanceApp: InsufficientBalanceApplicationService,
    private readonly primaryBidApp: PrimaryBidApplicationService,
    private readonly normalBidApp: NormalBidApplicationService,
    private readonly normalAskApp: NormalAskApplicationService,
    private readonly renewableBidApp: RenewableBidApplicationService,
    private readonly renewableAskApp: RenewableAskApplicationService,
    private readonly normalBidHistoryApp: NormalBidHistoryApplicationService,
    private readonly normalAskHistoryApp: NormalAskHistoryApplicationService,
    private readonly renewableBidHistoryApp: RenewableBidHistoryApplicationService,
    private readonly renewableAskHistoryApp: RenewableAskHistoryApplicationService,
  ) {
    const now = new Date();
    let firstDay = new Date();
    firstDay.setUTCDate(1);
    firstDay.setUTCHours(0, 0, 0, 0);
    const user$ = authState(this.auth);
    this.studentAccount$ = user$.pipe(mergeMap((user) => this.studentAccApp.getByUid$(user?.uid!)));

    const normalBids$ = this.studentAccount$.pipe(mergeMap((account) => this.normalBidApp.listUid$(account.id)));
    const normalAsks$ = this.studentAccount$.pipe(mergeMap((account) => this.normalAskApp.listUid$(account.id)));
    const renewableBids$ = this.studentAccount$.pipe(mergeMap((account) => this.renewableBidApp.listUid$(account.id)));
    const renewableAsks$ = this.studentAccount$.pipe(mergeMap((account) => this.renewableAskApp.listUid$(account.id)));

    const balance$ = this.studentAccount$.pipe(mergeMap((account) => this.availableBalanceApp.list$(account.id)));
    const insufficiency$ = this.studentAccount$.pipe(mergeMap((account) => this.insufficientBalanceApp.list(account.id))).pipe(
      map((insufficiencies) => {
        let count = 0;
        for (let insufficiency of insufficiencies) {
          (insufficiency.created_at as Timestamp).toDate() > firstDay ? (count += parseInt(insufficiency.amount_utoken)) : count;
        }
        return count;
      }),
    );
    this.uupxAmount$ = combineLatest([balance$, insufficiency$]).pipe(
      map(([balance, insufficiency]) =>
        parseInt(balance.amount_uupx) < insufficiency ? 0 : parseInt(balance.amount_uupx) - insufficiency,
      ),
    );
    this.uspxAmount$ = combineLatest([balance$, insufficiency$]).pipe(
      map(([balance, insufficiency]) =>
        parseInt(balance.amount_uspx) + parseInt(balance.amount_uupx) < insufficiency
          ? 0
          : parseInt(balance.amount_uupx) < insufficiency
          ? parseInt(balance.amount_uspx) + parseInt(balance.amount_uupx) - insufficiency
          : parseInt(balance.amount_uspx),
      ),
    );

    this.orders$ = combineLatest([normalBids$, normalAsks$, renewableBids$, renewableAsks$]).pipe(
      map(([normalBids, normalAsks, renewableBids, renewableAsks]) => {
        const normalBidList = normalBids
          .filter((bid) => bid.is_deleted == false)
          .map((bid) => ({
            id: bid.id,
            date: !bid.created_at ? now : (bid.created_at as Timestamp).toDate(),
            utokenAmount: bid.amount_uupx,
            ujpyPrice: bid.price_ujpy,
            isSolar: false,
            isBid: true,
          }));
        const normalAskList = normalAsks
          .filter((ask) => ask.is_deleted == false)
          .map((ask) => ({
            id: ask.id,
            date: !ask.created_at ? now : (ask.created_at as Timestamp).toDate(),
            utokenAmount: ask.amount_uupx,
            ujpyPrice: ask.price_ujpy,
            isSolar: false,
            isBid: false,
          }));
        const renewableBidList = renewableBids
          .filter((bid) => bid.is_deleted == false)
          .map((bid) => ({
            id: bid.id,
            date: !bid.created_at ? now : (bid.created_at as Timestamp).toDate(),
            utokenAmount: bid.amount_uspx,
            ujpyPrice: bid.price_ujpy,
            isSolar: true,
            isBid: true,
          }));
        const renewableAskList = renewableAsks
          .filter((ask) => ask.is_deleted == false)
          .map((ask) => ({
            id: ask.id,
            date: !ask.created_at ? now : (ask.created_at as Timestamp).toDate(),
            utokenAmount: ask.amount_uspx,
            ujpyPrice: ask.price_ujpy,
            isSolar: true,
            isBid: false,
          }));
        return normalBidList.concat(normalAskList, renewableBidList, renewableAskList).sort(function (first, second) {
          if (first.date > second.date) {
            return -1;
          } else if (first.date < second.date) {
            return 1;
          } else {
            return 0;
          }
        });
      }),
    );

    const primaryBid$ = this.studentAccount$.pipe(mergeMap((account) => this.primaryBidApp.list$(account.id)));
    const normalBidHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.normalBidHistoryApp.list$(account.id)));
    const normalAskHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.normalAskHistoryApp.list$(account.id)));
    const renewableBidHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.renewableBidHistoryApp.list$(account.id)));
    const renewableAskHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.renewableAskHistoryApp.list$(account.id)));

    this.histories$ = combineLatest([
      primaryBid$,
      normalBidHistories$,
      normalAskHistories$,
      renewableBidHistories$,
      renewableAskHistories$,
    ]).pipe(
      map(([primaryBids, normalBids, normalAsks, renewableBids, renewableAsks]) => {
        const primaryBidList = primaryBids.map((bid) => ({
          id: bid.id,
          date: !bid.created_at ? now : (bid.created_at as Timestamp).toDate(),
          utokenAmount: bid.amount_uupx,
          ujpyPrice: bid.price_ujpy,
          ujpyContractPrice: bid.price_ujpy,
          isAccepted: true,
          isSolar: false,
          isBid: true,
        }));

        const normalBidList = normalBids.map((bid) => ({
          id: bid.id,
          date: !bid.created_at ? now : (bid.created_at as Timestamp).toDate(),
          utokenAmount: bid.amount_uupx,
          ujpyPrice: bid.price_ujpy,
          ujpyContractPrice: bid.contract_price_ujpy,
          isAccepted: bid.is_accepted,
          isSolar: false,
          isBid: true,
        }));
        const normalAskList = normalAsks.map((ask) => ({
          id: ask.id,
          date: !ask.created_at ? now : (ask.created_at as Timestamp).toDate(),
          utokenAmount: ask.amount_uupx,
          ujpyPrice: ask.price_ujpy,
          ujpyContractPrice: ask.contract_price_ujpy,
          isAccepted: ask.is_accepted,
          isSolar: false,
          isBid: false,
        }));
        const renewableBidList = renewableBids.map((bid) => ({
          id: bid.id,
          date: !bid.created_at ? now : (bid.created_at as Timestamp).toDate(),
          utokenAmount: bid.amount_uspx,
          ujpyPrice: bid.price_ujpy,
          ujpyContractPrice: bid.contract_price_ujpy,
          isAccepted: bid.is_accepted,
          isSolar: true,
          isBid: true,
        }));
        const renewableAskList = renewableAsks.map((ask) => ({
          id: ask.id,
          date: !ask.created_at ? now : (ask.created_at as Timestamp).toDate(),
          utokenAmount: ask.amount_uspx,
          ujpyPrice: ask.price_ujpy,
          ujpyContractPrice: ask.contract_price_ujpy,
          isAccepted: ask.is_accepted,
          isSolar: true,
          isBid: false,
        }));
        return primaryBidList
          .concat(normalBidList, normalAskList, renewableBidList, renewableAskList)
          .filter((history) => history.date > firstDay)
          .sort(function (first, second) {
            if (first.date > second.date) {
              return -1;
            } else if (first.date < second.date) {
              return 1;
            } else {
              return 0;
            }
          });
      }),
    );
  }

  ngOnInit(): void {}
}
