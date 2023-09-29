import { Order, OrderHistory } from '../../../models/txs/tx.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentAccount } from '@local/common';

export type AutoOrderOnSubmitEvent = {
  studentAccountID: string;
  autoOrder: boolean;
};

@Component({
  selector: 'view-auto-order',
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
  histories?: OrderHistory[] | null;
  @Output()
  appSubmit: EventEmitter<AutoOrderOnSubmitEvent>;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onUpdateAutoOrder() {
    if (!this.studentAccount?.id) {
      alert('Please login');
      return;
    }
    this.appSubmit.emit({
      studentAccountID: this.studentAccount?.id,
      autoOrder: this.autoOrder || false,
    });
  }

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
