import { Order, History } from '../../../page/txs/txs.component';
import { Component, Input, OnInit } from '@angular/core';
import { StudentAccount } from '@local/common';

@Component({
  selector: 'app-auto-order',
  templateUrl: './auto-order.component.html',
  styleUrls: ['./auto-order.component.css'],
})
export class AutoOrderComponent implements OnInit {
  @Input()
  studentAccount?: StudentAccount | null;
  @Input()
  autoOrder?: boolean | null;
  @Input()
  orders?: Order[] | null;
  @Input()
  histories?: History[] | null;

  constructor() {}

  ngOnInit(): void {}

  onUpdateAutoOrder() {}

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
