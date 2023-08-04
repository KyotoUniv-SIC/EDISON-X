import { Order, OrderHistory } from '../../models/txs/tx.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.css'],
})
export class TxsComponent implements OnInit {
  @Input()
  orders?: Order[] | null;

  @Input()
  histories?: OrderHistory[] | null;

  constructor() {}

  ngOnInit(): void {}

  powerType(type: boolean) {
    if (!type) {
      return 'utility';
    } else {
      return 'solar';
    }
  }
  txType(type: boolean) {
    if (!type) {
      return 'ask';
    } else {
      return 'bid';
    }
  }
}
