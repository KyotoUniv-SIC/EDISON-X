import { Injectable } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import {
  NormalAsk,
  NormalAskHistory,
  NormalBid,
  NormalBidHistory,
  PrimaryBid,
  RenewableAsk,
  RenewableAskHistory,
  RenewableBid,
  RenewableBidHistory,
  StudentAccount,
} from '@local/common';
import { NormalAskHistoryApplicationService } from 'projects/shared/src/lib/services/normal-ask-histories/normal-ask-history.application.service';
import { NormalAskApplicationService } from 'projects/shared/src/lib/services/normal-asks/normal-ask.application.service';
import { NormalBidHistoryApplicationService } from 'projects/shared/src/lib/services/normal-bid-histories/normal-bid-history.application.service';
import { NormalBidApplicationService } from 'projects/shared/src/lib/services/normal-bids/normal-bid.application.service';
import { PrimaryBidApplicationService } from 'projects/shared/src/lib/services/primary-bids/primary-bid.application.service';
import { RenewableAskHistoryApplicationService } from 'projects/shared/src/lib/services/renewable-ask-histories/renewable-ask-history.application.service';
import { RenewableAskApplicationService } from 'projects/shared/src/lib/services/renewable-asks/renewable-ask.application.service';
import { RenewableBidHistoryApplicationService } from 'projects/shared/src/lib/services/renewable-bid-histories/renewable-bid-history.application.service';
import { RenewableBidApplicationService } from 'projects/shared/src/lib/services/renewable-bids/renewable-bid.application.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Order {
  id: string;
  date: Date;
  utokenAmount: string;
  ujpyPrice: string;
  isSolar: boolean;
  isBid: boolean;
}
export interface OrderHistory {
  id: string;
  date: Date;
  utokenAmount: string;
  ujpyPrice: string;
  ujpyContractPrice: string;
  isAccepted: boolean;
  isSolar: boolean;
  isBid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TxService {
  constructor(
    private readonly primaryBidApp: PrimaryBidApplicationService,
    private readonly normalBidApp: NormalBidApplicationService,
    private readonly normalAskApp: NormalAskApplicationService,
    private readonly renewableBidApp: RenewableBidApplicationService,
    private readonly renewableAskApp: RenewableAskApplicationService,
    private readonly normalBidHistoryApp: NormalBidHistoryApplicationService,
    private readonly normalAskHistoryApp: NormalAskHistoryApplicationService,
    private readonly renewableBidHistoryApp: RenewableBidHistoryApplicationService,
    private readonly renewableAskHistoryApp: RenewableAskHistoryApplicationService,
  ) {}

  listOrders$(student: StudentAccount): Observable<Order[]> {
    const normalBids$ = this.normalBidApp.listUid$(student.id);
    const normalAsks$ = this.normalAskApp.listUid$(student.id);
    const renewableBids$ = this.renewableBidApp.listUid$(student.id);
    const renewableAsks$ = this.renewableAskApp.listUid$(student.id);
    const orders$ = combineLatest([normalBids$, normalAsks$, renewableBids$, renewableAsks$]).pipe(
      map(([normalBids, normalAsks, renewableBids, renewableAsks]) =>
        this.concatOrders(normalBids, normalAsks, renewableBids, renewableAsks),
      ),
    );
    return orders$;
  }

  listAutoOrders$(student: StudentAccount): Observable<Order[]> {
    const normalBids$ = this.normalBidApp.listUid$(student.id).pipe(map((bids) => bids.filter((bid) => bid.is_auto_order)));
    const normalAsks$ = this.normalAskApp.listUid$(student.id).pipe(map((asks) => asks.filter((ask) => ask.is_auto_order)));
    const renewableBids$ = this.renewableBidApp.listUid$(student.id).pipe(map((bids) => bids.filter((bid) => bid.is_auto_order)));
    const renewableAsks$ = this.renewableAskApp.listUid$(student.id).pipe(map((asks) => asks.filter((ask) => ask.is_auto_order)));
    const orders$ = combineLatest([normalBids$, normalAsks$, renewableBids$, renewableAsks$]).pipe(
      map(([normalBids, normalAsks, renewableBids, renewableAsks]) =>
        this.concatOrders(normalBids, normalAsks, renewableBids, renewableAsks),
      ),
    );
    return orders$;
  }

  listHistories$(student: StudentAccount): Observable<OrderHistory[]> {
    const primaryBid$ = this.primaryBidApp.list$(student.id);
    const normalBidHistories$ = this.normalBidHistoryApp.list$(student.id);
    const normalAskHistories$ = this.normalAskHistoryApp.list$(student.id);
    const renewableBidHistories$ = this.renewableBidHistoryApp.list$(student.id);
    const renewableAskHistories$ = this.renewableAskHistoryApp.list$(student.id);
    const histories$ = combineLatest([
      primaryBid$,
      normalBidHistories$,
      normalAskHistories$,
      renewableBidHistories$,
      renewableAskHistories$,
    ]).pipe(
      map(([primaryBid, normalBidHistories, normalAskHistories, renewableBidHistories, renewableAskHistories]) =>
        this.concatHistories(primaryBid, normalBidHistories, normalAskHistories, renewableBidHistories, renewableAskHistories),
      ),
    );
    return histories$;
  }

  listAutoHistories$(student: StudentAccount): Observable<OrderHistory[]> {
    const normalBidHistories$ = this.normalBidHistoryApp.list$(student.id).pipe(map((bids) => bids.filter((bid) => bid.is_auto_order)));
    const normalAskHistories$ = this.normalAskHistoryApp.list$(student.id).pipe(map((asks) => asks.filter((ask) => ask.is_auto_order)));
    const renewableBidHistories$ = this.renewableBidHistoryApp
      .list$(student.id)
      .pipe(map((bids) => bids.filter((bid) => bid.is_auto_order)));
    const renewableAskHistories$ = this.renewableAskHistoryApp
      .list$(student.id)
      .pipe(map((asks) => asks.filter((ask) => ask.is_auto_order)));
    const histories$ = combineLatest([normalBidHistories$, normalAskHistories$, renewableBidHistories$, renewableAskHistories$]).pipe(
      map(([normalBidHistories, normalAskHistories, renewableBidHistories, renewableAskHistories]) =>
        this.concatHistories([], normalBidHistories, normalAskHistories, renewableBidHistories, renewableAskHistories),
      ),
    );
    return histories$;
  }

  concatOrders(normalBids: NormalBid[], normalAsks: NormalAsk[], renewableBids: RenewableBid[], renewableAsks: RenewableAsk[]): Order[] {
    const now = new Date();
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
  }

  concatHistories(
    primaryBids: PrimaryBid[],
    normalBidHistories: NormalBidHistory[],
    normalAskHistories: NormalAskHistory[],
    renewableBidHistories: RenewableBidHistory[],
    renewableAskHistories: RenewableAskHistory[],
  ): OrderHistory[] {
    const now = new Date();
    let firstDay = new Date();
    firstDay.setUTCDate(1);
    firstDay.setUTCHours(0, 0, 0, 0);
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

    const normalBidList = normalBidHistories.map((bid) => ({
      id: bid.id,
      date: !bid.created_at ? now : (bid.created_at as Timestamp).toDate(),
      utokenAmount: bid.amount_uupx,
      ujpyPrice: bid.price_ujpy,
      ujpyContractPrice: bid.contract_price_ujpy,
      isAccepted: bid.is_accepted,
      isSolar: false,
      isBid: true,
    }));
    const normalAskList = normalAskHistories.map((ask) => ({
      id: ask.id,
      date: !ask.created_at ? now : (ask.created_at as Timestamp).toDate(),
      utokenAmount: ask.amount_uupx,
      ujpyPrice: ask.price_ujpy,
      ujpyContractPrice: ask.contract_price_ujpy,
      isAccepted: ask.is_accepted,
      isSolar: false,
      isBid: false,
    }));
    const renewableBidList = renewableBidHistories.map((bid) => ({
      id: bid.id,
      date: !bid.created_at ? now : (bid.created_at as Timestamp).toDate(),
      utokenAmount: bid.amount_uspx,
      ujpyPrice: bid.price_ujpy,
      ujpyContractPrice: bid.contract_price_ujpy,
      isAccepted: bid.is_accepted,
      isSolar: true,
      isBid: true,
    }));
    const renewableAskList = renewableAskHistories.map((ask) => ({
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
  }
}
