import { BalanceHistory, PaymentHistory } from '../../../page/txs/history/history.component';
import { DateRange } from '../../admin/dashboard/dashboard.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  insufficiencyAmount?: number | null;
  @Input()
  balanceHistories?: BalanceHistory[] | null;
  @Input()
  paymentHistories?: PaymentHistory[] | null;
  @Input()
  selectedTokenType?: string | null;
  @Input()
  selectedTxType?: string | null;

  @Output()
  selectedTokenTypeChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  selectedTxTypeChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  selectedDateRangeChanged: EventEmitter<DateRange> = new EventEmitter<DateRange>();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  tokenTypeOptions = [
    { value: 'all', viewValue: 'All Tokens' },
    { value: 'upx', viewValue: 'UPX' },
    { value: 'spx', viewValue: 'SPX' },
  ];
  txTypeOptions = [
    { value: 'all', viewValue: 'All Transactions' },
    { value: 'auction', viewValue: 'Auction' },
    { value: 'primary', viewValue: 'Primary' },
    { value: 'accepted', viewValue: 'Accepted Transactions' },
    { value: 'rejected', viewValue: 'Rejected Transactions' },
  ];
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

  onSelectedTokenTypeChanged(selectedTokenType: string): void {
    this.selectedTokenTypeChanged.emit(selectedTokenType);
  }

  onSelectedTxTypeChanged(selectedTxType: string): void {
    this.selectedTxTypeChanged.emit(selectedTxType);
  }

  onSelectedDateRangeChanged(): void {
    if (this.range.value.start && this.range.value.end) {
      console.log(this.range.value);
      this.selectedDateRangeChanged.emit(this.range.value);
    }
  }
}
