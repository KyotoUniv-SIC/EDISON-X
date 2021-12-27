import { Component, OnInit, Input } from '@angular/core';
import { User } from '@firebase/auth';
import { Balance, MonthlyPayment } from 'common/dist/cjs';

@Component({
  selector: 'view-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input()
  user?: User | null;
  @Input()
  monthlyPayments?: MonthlyPayment[] | null;
  @Input()
  balances?: Balance | null;
  constructor() {}

  ngOnInit(): void {}
}
