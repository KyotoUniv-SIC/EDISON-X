import { DateRange } from '../../../view/admin/dashboard/dashboard.component';
import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Timestamp } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentAccount } from '@local/common';
import { NormalAskHistoryApplicationService } from 'projects/shared/src/lib/services/normal-ask-histories/normal-ask-history.application.service';
import { NormalBidHistoryApplicationService } from 'projects/shared/src/lib/services/normal-bid-histories/normal-bid-history.application.service';
import { PrimaryBidApplicationService } from 'projects/shared/src/lib/services/primary-bids/primary-bid.application.service';
import { RenewableAskHistoryApplicationService } from 'projects/shared/src/lib/services/renewable-ask-histories/renewable-ask-history.application.service';
import { RenewableBidHistoryApplicationService } from 'projects/shared/src/lib/services/renewable-bid-histories/renewable-bid-history.application.service';
import { AvailableBalanceApplicationService } from 'projects/shared/src/lib/services/student-accounts/available-balances/available-balance.application.service';
import { DailyPaymentApplicationService } from 'projects/shared/src/lib/services/student-accounts/daily-payments/daily-payment.application.service';
import { InsufficientBalanceApplicationService } from 'projects/shared/src/lib/services/student-accounts/insufficient-balances/insufficient-balance.application.service';
import { StudentAccountApplicationService } from 'projects/shared/src/lib/services/student-accounts/student-account.application.service';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export interface BalanceHistory {
  id: string;
  date: Date;
  utokenAmount: string; // 量の表示用（正値）
  isAccepted: boolean;
  isSolar: boolean; // UPXかSPXかの判別
  isBid: boolean; // Bid, Askの判別（utokenAmountの符号）
  isPrimary: boolean; // 月初の配布か否かの判別
  ujpyPrice: string;
  ujpyContractPrice: string;
}

export interface PaymentHistory {
  id: string;
  date: Date;
  utokenAmount: string; // 量の表示用（正値）
  isSolar: boolean; // UPXかSPXかの判別
  isInsufficiency: boolean; // insufficiencyかの判別
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
  insufficiencyAmount$: Observable<number> | undefined;
  histories$: Observable<History[]> | undefined;
  balanceHistories$: Observable<BalanceHistory[]> | undefined;
  paymentHistories$: Observable<PaymentHistory[]> | undefined;
  dailyPaymentHistories$: Observable<PaymentHistory[]> | undefined;

  selectedTokenType$: Observable<string>;
  selectedTxType$: Observable<string>;
  selectedTxsDateRange$: Observable<DateRange>;
  selectedDailyPaymentDateRange$: Observable<DateRange>;

  constructor(
    private auth: Auth,
    private router: Router,
    private route: ActivatedRoute,
    private readonly studentAccApp: StudentAccountApplicationService,
    private readonly availableBalanceApp: AvailableBalanceApplicationService,
    private readonly insufficientBalanceApp: InsufficientBalanceApplicationService,
    private readonly primaryBidApp: PrimaryBidApplicationService,
    private readonly dailyPaymentApp: DailyPaymentApplicationService,
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

    this.selectedTokenType$ = this.route.queryParams.pipe(map((params) => params.tokenType ?? 'all'));
    this.selectedTxType$ = this.route.queryParams.pipe(map((params) => params.txType ?? 'all'));

    this.selectedTxsDateRange$ = this.route.queryParams.pipe(
      map((params) => {
        if (params.start && params.end) {
          return { start: this.convertStringToStartDate(params.start), end: this.convertStringToEndDate(params.end) };
        } else {
          return { start: firstDay, end: now };
        }
      }),
    );
    this.selectedDailyPaymentDateRange$ = this.route.queryParams.pipe(
      map((params) => {
        if (params.startPayment && params.endPayment) {
          return { start: this.convertStringToStartDate(params.start), end: this.convertStringToEndDate(params.end) };
        } else {
          return { start: firstDay, end: now };
        }
      }),
    );

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
    this.insufficiencyAmount$ = combineLatest([balance$, insufficiency$]).pipe(
      map(([balance, insufficiency]) =>
        parseInt(balance.amount_uupx) + parseInt(balance.amount_uspx) < insufficiency
          ? insufficiency - parseInt(balance.amount_uupx) - parseInt(balance.amount_uspx)
          : 0,
      ),
    );

    const primaryBid$ = this.studentAccount$.pipe(mergeMap((account) => this.primaryBidApp.list$(account.id)));
    const normalBidHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.normalBidHistoryApp.list$(account.id)));
    const normalAskHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.normalAskHistoryApp.list$(account.id)));
    const renewableBidHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.renewableBidHistoryApp.list$(account.id)));
    const renewableAskHistories$ = this.studentAccount$.pipe(mergeMap((account) => this.renewableAskHistoryApp.list$(account.id)));

    const histories$ = combineLatest([
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
          isPrimary: true,
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
          isPrimary: false,
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
          isPrimary: false,
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
          isPrimary: false,
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
          isPrimary: false,
        }));
        return primaryBidList.concat(normalBidList, normalAskList, renewableBidList, renewableAskList);
      }),
    );
    this.balanceHistories$ = combineLatest([histories$, this.selectedTokenType$, this.selectedTxType$, this.selectedTxsDateRange$]).pipe(
      map(([histories, tokenType, txType, range]) => {
        let filteredHistories;
        filteredHistories = histories;
        if (tokenType == 'upx') {
          filteredHistories = filteredHistories.filter((history) => !history.isSolar);
        } else if (tokenType == 'spx') {
          filteredHistories = filteredHistories.filter((history) => history.isSolar);
        }
        if (txType == 'auction') {
          filteredHistories = filteredHistories.filter((history) => !history.isPrimary);
        } else if (txType == 'primary') {
          filteredHistories = filteredHistories.filter((history) => history.isPrimary);
        } else if (txType == 'accepted') {
          filteredHistories = filteredHistories.filter((history) => history.isAccepted);
        } else if (txType == 'rejected') {
          filteredHistories = filteredHistories.filter((history) => !history.isAccepted);
        }
        filteredHistories = filteredHistories
          .filter((history) => history.date > range.start)
          .filter((history) => history.date < range.end)
          .sort(function (first, second) {
            if (first.date > second.date) {
              return -1;
            } else if (first.date < second.date) {
              return 1;
            } else {
              return 0;
            }
          });
        return filteredHistories;
      }),
    );

    const dailyPayment$ = this.studentAccount$.pipe(mergeMap((account) => this.dailyPaymentApp.list$(account.id)));
    this.paymentHistories$ = dailyPayment$.pipe(
      map((payments) => {
        let paymentHistories = [];
        for (const payment of payments) {
          if (parseInt(payment.amount_uupx)) {
            paymentHistories.push({
              id: payment.id,
              date: (payment.created_at as Timestamp).toDate(),
              utokenAmount: payment.amount_uupx,
              isSolar: false,
              isInsufficiency: false,
            });
          }
          if (parseInt(payment.amount_uspx)) {
            paymentHistories.push({
              id: payment.id,
              date: (payment.created_at as Timestamp).toDate(),
              utokenAmount: payment.amount_uspx,
              isSolar: true,
              isInsufficiency: false,
            });
          }
          if (parseInt(payment.amount_insufficiency)) {
            paymentHistories.push({
              id: payment.id,
              date: (payment.created_at as Timestamp).toDate(),
              utokenAmount: payment.amount_insufficiency,
              isSolar: false,
              isInsufficiency: true,
            });
          }
        }
        return paymentHistories;
      }),
    );
    this.dailyPaymentHistories$ = combineLatest([this.paymentHistories$, this.selectedDailyPaymentDateRange$]).pipe(
      map(([histories, range]) => {
        let filteredDailyPaymentHistories;
        filteredDailyPaymentHistories = histories;

        filteredDailyPaymentHistories = filteredDailyPaymentHistories
          .filter((history) => history.date > range.start)
          .filter((history) => history.date < range.end)
          .sort(function (first, second) {
            if (first.date > second.date) {
              return -1;
            } else if (first.date < second.date) {
              return 1;
            } else {
              return 0;
            }
          });
        return filteredDailyPaymentHistories;
      }),
    );
  }

  ngOnInit(): void {}

  appSelectedTokenTypeChanged(selectedTokenType: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tokenType: selectedTokenType,
      },
      queryParamsHandling: 'merge',
    });
  }

  appSelectedTxTypeChanged(selectedTxType: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        txType: selectedTxType,
      },
      queryParamsHandling: 'merge',
    });
  }

  appSelectedTxsDateRangeChanged(selectedDateRange: DateRange): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        start: this.convertDateToString(selectedDateRange.start),
        end: this.convertDateToString(selectedDateRange.end),
      },
      queryParamsHandling: 'merge',
    });
  }
  appSelectedDailyPaymentDateRangeChanged(selectedDailyPaymentDateRange: DateRange): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        startPayment: this.convertDateToString(selectedDailyPaymentDateRange.start),
        endPayment: this.convertDateToString(selectedDailyPaymentDateRange.end),
      },
      queryParamsHandling: 'merge',
    });
  }

  convertDateToString(dt: Date) {
    const y = dt.getFullYear();
    const m = ('00' + (dt.getMonth() + 1)).slice(-2);
    const d = ('00' + dt.getDate()).slice(-2);
    return y + m + d;
  }

  convertStringToStartDate(str: string) {
    const year = parseInt(str.substring(0, 4));
    const month = parseInt(str.substring(4, 6));
    const day = parseInt(str.substring(6, 8));
    return new Date(year, month - 1, day, 0, 0);
  }

  convertStringToEndDate(str: string) {
    const year = parseInt(str.substring(0, 4));
    const month = parseInt(str.substring(4, 6));
    const day = parseInt(str.substring(6, 8));
    return new Date(year, month - 1, day + 1, 0, 0);
  }
}
