import { Component, OnInit, Input } from '@angular/core';
import { NormalAskHistory, NormalBid, NormalBidHistory, proto, RenewableAskHistory, RenewableBidHistory } from '@local/common';

@Component({
  selector: 'view-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.css'],
})
export class TxsComponent implements OnInit {
  @Input()
  normalBidOrders?: NormalBid[] | null;

  @Input()
  normalBidHistories?: NormalBidHistory[] | null;

  constructor() {}

  ngOnInit(): void {}
}
