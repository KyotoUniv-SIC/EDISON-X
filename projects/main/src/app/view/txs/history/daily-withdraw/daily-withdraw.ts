import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { NormalBidHistory, PrimaryBid } from '@local/common';

@Component({
  selector: 'view-daily-withdraw',
  templateUrl: './daily-withdraw.component.html',
  styleUrls: ['./daily-withdraw.component.css'],
})
export class DailyWithdrawComponent implements OnInit {
  @Input()
  normalBid?: NormalBidHistory | null;
  @Input()
  primaryBid?: PrimaryBid | null;
  @Input()
  createdAt?: Date | null;
  @Input()
  bidCreatedAt?: Date | null;
  @Input()
  createdAtPrimary?: Date | null;

  constructor() {}

  ngOnInit(): void {}
}
