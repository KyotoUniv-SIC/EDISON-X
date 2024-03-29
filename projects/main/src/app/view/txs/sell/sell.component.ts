import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AvailableBalance, SinglePriceNormalSettlement, SinglePriceRenewableSettlement, StudentAccount } from '@local/common';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

interface Token {
  value: string;
  viewValue: string;
}

export type SellOnSubmitEvent = {
  accountID: string;
  ujpyPrice: string;
  utokenAmount: string;
  denom: string;
};

@Component({
  selector: 'view-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  @Input()
  studentAccount?: StudentAccount | null;
  @Input()
  uupxAmount?: number | null;
  @Input()
  uspxAmount?: number | null;
  @Input()
  insufficiencyAmount?: number | null;
  @Input()
  singlePriceNormal?: SinglePriceNormalSettlement | null;
  @Input()
  singlePriceNormalDate?: Date | null;
  @Input()
  singlePriceRenewable?: SinglePriceRenewableSettlement | null;
  @Input()
  singlePriceRenewableDate?: Date | null;
  @Input()
  normalGraphPrices?: Label[] | null;
  @Input()
  normalGraphAmounts?: ChartDataSets[] | null;
  @Input()
  renewableGraphPrices?: Label[] | null;
  @Input()
  renewableGraphAmounts?: ChartDataSets[] | null;
  @Input()
  isNormalContractToday?: boolean | null;
  @Input()
  isRenewableContractToday?: boolean | null;

  @Input()
  accountID?: string | null;
  @Input()
  price?: number | null;
  @Input()
  amount?: number | null;
  @Input()
  denom?: string | null;

  @Output()
  appSubmit: EventEmitter<SellOnSubmitEvent>;

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: { display: true, labelString: 'Price' },
          stacked: true,
        },
      ],
      yAxes: [
        {
          scaleLabel: { display: true, labelString: 'Amount' },
          stacked: true,
        },
      ],
    },
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barColors: Color[] = [
    {
      backgroundColor: '#b67cb6',
    },
    {
      backgroundColor: '#6c8fb6',
    },
  ];

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(accountID: string, price: string, amount: string, denom: string) {
    const now = new Date();
    if (0 <= now.getUTCHours() && now.getUTCHours() < 2) {
      alert('EDISONでは、9:00-1:00(JST)の間、入札ができません');
      return;
    }
    if (!denom) {
      alert('トークンの種類を指定してください。\nUPX=電力会社、SPX=太陽光発電');
      return;
    }
    if (!this.studentAccount) {
      alert('ユーザーログイン情報を取得できません');
      return;
    }
    if (denom == 'upx-0' && Number(amount) > this.uupxAmount!) {
      alert('UPXの残高が足りません。');
      return;
    }
    if (denom == 'spx-1' && Number(amount) > this.uspxAmount!) {
      alert('SPXの残高が足りません。');
      return;
    }
    const ujpyPrice = Math.floor(Number(price) * 1000000).toString();
    const utokenAmount = Math.floor(Number(amount) * 1000000).toString();
    this.appSubmit.emit({ accountID: this.studentAccount?.id, ujpyPrice, utokenAmount, denom });
  }

  calcTotalPrice(price: any, amount: any) {
    if (!price || !amount) return null;
    return price * amount;
  }
  tokens: Token[] = [
    { value: 'upx-0', viewValue: 'UPX' },
    { value: 'spx-1', viewValue: 'SPX' },
  ];
}
