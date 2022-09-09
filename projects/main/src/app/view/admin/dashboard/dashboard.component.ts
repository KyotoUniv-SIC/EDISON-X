import { Ranking } from '../../../page/dashboard/dashboard.component';
import { Select } from '../../accounts/room/room.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  NormalAsk,
  NormalBid,
  RenewableAsk,
  RenewableBid,
  SinglePriceNormalSettlement,
  SinglePriceRenewableSettlement,
  StudentAccount,
} from '@local/common';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import {
  usageChartLabels,
  usageChartLegend,
  usageChartOptions,
  usageChartPlugins,
  usageChartType,
  usageColors,
} from 'projects/shared/src/lib/services/charts/chart-monthly-usages/chart-monthly-usage.service';

export interface HistoryOption {
  onlyContracted: boolean;
  start: Date;
  end: Date;
}

export interface MonthlyOption {
  year: number;
  month: number;
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface OrderData {
  students: StudentAccount[];
  normalBids: NormalBid[];
  normalAsks: NormalAsk[];
  renewableBids: RenewableBid[];
  renewableAsks: RenewableAsk[];
}

@Component({
  selector: 'view-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input()
  students?: StudentAccount[] | null;
  @Input()
  totalBalanceData?: MultiDataSet | null;
  @Input()
  totalUsageData?: ChartDataSets[] | null;
  @Input()
  rankings?: Ranking[] | null;
  @Input()
  normalAsks?: NormalAsk[] | null;
  @Input()
  normalBids?: NormalBid[] | null;
  @Input()
  renewableAsks?: RenewableAsk[] | null;
  @Input()
  renewableBids?: RenewableBid[] | null;
  @Input()
  singlePriceNormal?: SinglePriceNormalSettlement | null;
  @Input()
  singlePriceNormalDate?: Date | null;
  @Input()
  singlePriceRenewable?: SinglePriceRenewableSettlement | null;
  @Input()
  singlePriceRenewableDate?: Date | null;

  @Output()
  appDownloadBalances: EventEmitter<{}>;
  @Output()
  appDownloadOrders: EventEmitter<OrderData>;
  @Output()
  appDownloadUserUsages: EventEmitter<Ranking[]>;
  @Output()
  appDownloadMonthlyUsages: EventEmitter<ChartDataSets[]>;
  @Output()
  appDownloadMonthlyPayments: EventEmitter<MonthlyOption>;
  @Output()
  appDownloadNormalBids: EventEmitter<HistoryOption>;
  @Output()
  appDownloadNormalAsks: EventEmitter<HistoryOption>;
  @Output()
  appDownloadRenewableBids: EventEmitter<HistoryOption>;
  @Output()
  appDownloadRenewableAsks: EventEmitter<HistoryOption>;
  @Output()
  appDownloadUsages: EventEmitter<DateRange>;
  @Output()
  appDownloadPayments: EventEmitter<DateRange>;

  doughnutChartLabels: Label[] = ['Utility Power', 'Solar Power'];
  doughnutChartType: ChartType = 'doughnut';
  doughnutColors: Color[] = [
    {
      backgroundColor: ['#6c8fb6', '#b67cb6'],
    },
  ];

  barChartOptions = usageChartOptions;
  barChartLabels = usageChartLabels;
  barChartType = usageChartType;
  barChartLegend = usageChartLegend;
  barChartPlugins = usageChartPlugins;
  barColors = usageColors;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  usageRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  checked: boolean = false;

  years: Select[] = [
    { value: '0', viewValue: 'All' },
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023' },
  ];
  months: Select[] = [
    { value: '0', viewValue: 'All' },
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },
  ];

  constructor() {
    this.appDownloadBalances = new EventEmitter();
    this.appDownloadOrders = new EventEmitter();
    this.appDownloadUserUsages = new EventEmitter();
    this.appDownloadMonthlyUsages = new EventEmitter();
    this.appDownloadMonthlyPayments = new EventEmitter();
    this.appDownloadNormalBids = new EventEmitter();
    this.appDownloadNormalAsks = new EventEmitter();
    this.appDownloadRenewableBids = new EventEmitter();
    this.appDownloadRenewableAsks = new EventEmitter();
    this.appDownloadUsages = new EventEmitter();
    this.appDownloadPayments = new EventEmitter();
  }

  ngOnInit(): void {}

  onDownloadBalances() {
    this.appDownloadBalances.emit();
  }
  onDownloadOrders() {
    if (!this.students) {
      alert('エラーが発生しました');
      return;
    }
    if (!this.normalBids || !this.normalAsks || !this.renewableBids || !this.renewableAsks) {
      alert('注文情報を取得できません');
      return;
    }
    this.appDownloadOrders.emit({
      students: this.students,
      normalBids: this.normalBids,
      normalAsks: this.normalAsks,
      renewableBids: this.renewableBids,
      renewableAsks: this.renewableAsks,
    });
  }
  onDownloadUserUsages() {
    if (!this.rankings) {
      alert('使用量情報を取得できません');
      return;
    }
    this.appDownloadUserUsages.emit(this.rankings);
  }
  onDownloadMonthlyUsages() {
    if (!this.totalUsageData) {
      alert('使用量情報を取得できません');
      return;
    }
    this.appDownloadMonthlyUsages.emit(this.totalUsageData);
  }

  onDownloadMonthlyPayments(year: string, month: string) {
    const yearNum = parseInt(year);
    const monthNum = parseInt(month);
    if ((!yearNum && yearNum != 0) || (!monthNum && monthNum != 0)) {
      alert('条件を正しく設定してください');
      return;
    }
    this.appDownloadMonthlyPayments.emit({ year: yearNum, month: monthNum });
  }

  onDownloadNormalBidHistories() {
    if (!this.range.value.start || !this.range.value.end) {
      alert('範囲を正しく指定してください');
      return;
    }
    this.appDownloadNormalBids.emit({ onlyContracted: this.checked, start: this.range.value.start, end: this.range.value.end });
  }

  onDownloadNormalAskHistories() {
    if (!this.range.value.start || !this.range.value.end) {
      alert('範囲を正しく指定してください');
      return;
    }
    this.appDownloadNormalAsks.emit({ onlyContracted: this.checked, start: this.range.value.start, end: this.range.value.end });
  }

  onDownloadRenewableBidHistories() {
    if (!this.range.value.start || !this.range.value.end) {
      alert('範囲を正しく指定してください');
      return;
    }
    this.appDownloadRenewableBids.emit({ onlyContracted: this.checked, start: this.range.value.start, end: this.range.value.end });
  }

  onDownloadRenewableAskHistories() {
    if (!this.range.value.start || !this.range.value.end) {
      alert('範囲を正しく指定してください');
      return;
    }
    this.appDownloadRenewableAsks.emit({ onlyContracted: this.checked, start: this.range.value.start, end: this.range.value.end });
  }

  onDownloadUsages() {
    if (!this.usageRange.value.start || !this.usageRange.value.end) {
      alert('範囲を正しく指定してください');
      return;
    }
    this.appDownloadUsages.emit({ start: this.usageRange.value.start, end: this.usageRange.value.end });
  }

  onDownloadPayments() {
    if (!this.usageRange.value.start || !this.usageRange.value.end) {
      alert('範囲を正しく指定してください');
      return;
    }
    this.appDownloadPayments.emit({ start: this.usageRange.value.start, end: this.usageRange.value.end });
  }
}
