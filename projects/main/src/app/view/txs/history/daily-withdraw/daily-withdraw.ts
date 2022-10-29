import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { PaymentHistory } from 'projects/main/src/app/page/txs/history/history.component';

@Component({
  selector: 'view-daily-withdraw',
  templateUrl: './daily-withdraw.component.html',
  styleUrls: ['./daily-withdraw.component.css'],
})
export class DailyWithdrawComponent implements OnInit {
  @Input()
  dailyWithdraw?: PaymentHistory | null;


  constructor() {}

  ngOnInit(): void {}
}
