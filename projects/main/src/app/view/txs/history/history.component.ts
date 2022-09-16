import { Component, Input, OnInit } from '@angular/core';
import { RenewableBidHistory } from '@local/common';

@Component({
  selector: 'view-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  @Input()
  renewableBid?: RenewableBidHistory | null;
  @Input()
  createdAt?: Date | null;
  @Input()
  bidCreatedAt?: Date | null;

  constructor() {}

  ngOnInit(): void {}
}
