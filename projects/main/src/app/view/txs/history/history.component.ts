import { Order, History } from '../../../page/txs/history/history.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentAccount } from '@local/common';

@Component({
  selector: 'view-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  @Input()
  studentAccount?: StudentAccount | null;
  @Input()
  uupxAmount?: number | null;
  @Input()
  uspxAmount?: number | null;
  @Input()
  orders?: Order[] | null;
  @Input()
  histories?: History[] | null;
  // @Input()
  // txsTypes$: TxsType[] | null;

  constructor() {}

  ngOnInit(): void {}

  selectedToken = 'default';
  selectedTransaction = 'default';
  panelOpenState = false;

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
