import { BalanceApplicationService } from '../../student-accounts/balances/balance.application.service';
import { InsufficientBalanceApplicationService } from '../../student-accounts/insufficient-balances/insufficient-balance.application.service';
import { MonthlyPaymentApplicationService } from '../../student-accounts/monthly-payments/monthly-payment.application.service';
import { MonthlyUsageApplicationService } from '../../student-accounts/monthly-usages/monthly-usage.application.service';
import { StudentAccountApplicationService } from '../../student-accounts/student-account.application.service';
import { CSVCommonService } from '../csv-common.service';
import { Injectable } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { Balance, MonthlyPayment, MonthlyUsage, NormalAsk, NormalBid, RenewableAsk, RenewableBid, StudentAccount } from '@local/common';
import { ChartDataSets } from 'chart.js';
import { Ranking } from 'projects/main/src/app/page/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root',
})
export class CsvDownloadService {
  constructor(
    private readonly csvCommon: CSVCommonService,
    private readonly studentsApp: StudentAccountApplicationService,
    private readonly balanceApp: BalanceApplicationService,
    private readonly insufficientBalanceApp: InsufficientBalanceApplicationService,
    private readonly monthlyPaymentApp: MonthlyPaymentApplicationService,
    private readonly monthlyUsageApp: MonthlyUsageApplicationService,
  ) {}

  async downloadBalances() {
    // ここでJSON=>CSVの変換とダウンロードを行う
    const students = await this.studentsApp.list();
    let balances: Balance[] = [];
    let studentInsufficiencies: { account_id: string; account_name: string; insufficient_utoken: number }[] = [];
    for (let student of students) {
      const balance = await this.balanceApp.getLatest(student.id);
      const insufficiencies = await this.insufficientBalanceApp.list(student.id);
      balances.push(balance);
      studentInsufficiencies.push({
        account_id: student.id,
        account_name: student.name,
        insufficient_utoken: insufficiencies.reduce((previous, current) => previous + parseInt(current.amount_utoken), 0),
      });
    }
    const balanceData = balances.map((balance) => {
      return {
        account_id: balance.student_account_id,
        account_name: students.find((student) => student.id == balance.student_account_id)?.name,
        amount_upx: parseInt(balance.amount_uupx) / 1000000,
        amount_spx: parseInt(balance.amount_uspx) / 1000000,
        insufficient_utoken:
          studentInsufficiencies.find((insufficiency) => (insufficiency.account_id = balance.student_account_id))?.insufficient_utoken! /
          1000000,
        timestamp: (balance.updated_at as Timestamp).toDate().toLocaleString(),
      };
    });
    const csv = this.csvCommon.jsonToCsv(balanceData, ',');
    this.csvCommon.downloadCsv(csv, 'balances');
  }

  async downloadOrders(
    students: StudentAccount[],
    normalBids: NormalBid[],
    normalAsks: NormalAsk[],
    renewableBids: RenewableBid[],
    renewableAsks: RenewableAsk[],
  ) {
    const now = new Date();
    const normalBidList = normalBids
      .filter((bid) => bid.is_deleted == false)
      .map((bid) => ({
        id: bid.id,
        account_id: bid.account_id,
        date: !bid.created_at ? now.toLocaleString() : (bid.created_at as Timestamp).toDate().toLocaleString(),
        amount_utoken: bid.amount_uupx,
        price_ujpy: bid.price_ujpy,
        power_type: 'utility',
        order_type: 'bid',
      }));
    const normalAskList = normalAsks
      .filter((ask) => ask.is_deleted == false)
      .map((ask) => ({
        id: ask.id,
        account_id: ask.account_id,
        date: !ask.created_at ? now.toLocaleString() : (ask.created_at as Timestamp).toDate().toLocaleString(),
        amount_utoken: ask.amount_uupx,
        price_ujpy: ask.price_ujpy,
        power_type: 'utility',
        order_type: 'ask',
      }));
    const renewableBidList = renewableBids
      .filter((bid) => bid.is_deleted == false)
      .map((bid) => ({
        id: bid.id,
        account_id: bid.account_id,
        date: !bid.created_at ? now.toLocaleString() : (bid.created_at as Timestamp).toDate().toLocaleString(),
        amount_utoken: bid.amount_uspx,
        price_ujpy: bid.price_ujpy,
        power_type: 'solar',
        order_type: 'bid',
      }));

    const renewableAskList = renewableAsks
      .filter((ask) => ask.is_deleted == false)
      .map((ask) => ({
        id: ask.id,
        account_id: ask.account_id,
        date: !ask.created_at ? now.toLocaleString() : (ask.created_at as Timestamp).toDate().toLocaleString(),
        amount_utoken: ask.amount_uspx,
        price_ujpy: ask.price_ujpy,
        power_type: 'solar',
        order_type: 'ask',
      }));
    const orders = normalBidList
      .concat(normalAskList, renewableBidList, renewableAskList)
      .sort((first, second) => {
        if (first.date > second.date) {
          return -1;
        } else if (first.date < second.date) {
          return 1;
        } else {
          return 0;
        }
      })
      .map((order) => {
        return {
          id: order.id,
          account_id: order.account_id,
          account_name: !students.find((student) => student.id == order.account_id)?.name
            ? 'System'
            : students.find((student) => student.id == order.account_id)?.name,
          date: order.date,
          amount_token: parseInt(order.amount_utoken) / 1000000,
          price_jpy: parseInt(order.price_ujpy) / 1000000,
          power_type: 'solar',
          order_type: 'ask',
        };
      });
    const csv = this.csvCommon.jsonToCsv(orders, ',');
    this.csvCommon.downloadCsv(csv, 'orders');
  }

  async downloadUserUsages(ranks: Ranking[]) {
    let usages = [];
    for (let data of ranks) {
      const balance = await this.balanceApp.list(data.id);
      const insufficiencies = await this.insufficientBalanceApp.list(data.id);
      usages.push({
        rank: data.rank,
        account_id: data.id,
        account_name: data.name,
        usage_kwh: data.kwhAmount,
        amount_upx: parseInt(balance[0].amount_uupx) / 1000000,
        amount_spx: parseInt(balance[0].amount_uspx) / 1000000,
        amount_insufficient_token: insufficiencies.reduce((previous, current) => previous + parseInt(current.amount_utoken), 0) / 1000000,
      });
    }
    const csv = this.csvCommon.jsonToCsv(usages, ',');
    this.csvCommon.downloadCsv(csv, 'users_usages');
  }

  async downloadMonthlyUsages(dataSets: ChartDataSets[]) {
    const now = new Date();
    const usages = [
      {
        year: now.getFullYear() - 1,
        jan: dataSets[1].data![0],
        feb: dataSets[1].data![1],
        mar: dataSets[1].data![2],
        apr: dataSets[1].data![3],
        may: dataSets[1].data![4],
        jun: dataSets[1].data![5],
        jul: dataSets[1].data![6],
        aug: dataSets[1].data![7],
        sep: dataSets[1].data![8],
        oct: dataSets[1].data![9],
        nov: dataSets[1].data![10],
        dec: dataSets[1].data![11],
      },
      {
        year: now.getFullYear(),
        jan: dataSets[0].data![0],
        feb: dataSets[0].data![1],
        mar: dataSets[0].data![2],
        apr: dataSets[0].data![3],
        may: dataSets[0].data![4],
        jun: dataSets[0].data![5],
        jul: dataSets[0].data![6],
        aug: dataSets[0].data![7],
        sep: dataSets[0].data![8],
        oct: dataSets[0].data![9],
        nov: dataSets[0].data![10],
        dec: dataSets[0].data![11],
      },
    ];
    const csv = this.csvCommon.jsonToCsv(usages, ',');
    this.csvCommon.downloadCsv(csv, 'monthly_usages');
  }

  async downloadMonthlyPayments(year: number, month: number) {
    const students = await this.studentsApp.list();
    let monthlyPayments: MonthlyPayment[] = [];
    let monthlyUsages: MonthlyUsage[] = [];
    for (let student of students) {
      let payments = await this.monthlyPaymentApp.list(student.id);
      let usages = await this.monthlyUsageApp.list(student.id);
      if (year) {
        payments = payments.filter((payment) => payment.year == year.toString());
        usages = usages.filter((usage) => usage.year == year.toString());
      }
      if (month) {
        payments = payments.filter((payment) => payment.month == month.toString());
        usages = usages.filter((usage) => usage.month == month.toString());
      }
      monthlyPayments = monthlyPayments.concat(payments);
      monthlyUsages = monthlyUsages.concat(usages);
    }
    if (!monthlyPayments.length) {
      alert('データが存在しません');
      return;
    }
    // 昇順に並び替え
    monthlyPayments.sort((first, second) => {
      if (!first.created_at) {
        return -1;
      } else if (!second.created_at) {
        return 1;
      } else {
        if ((first.created_at as Timestamp).toDate() < (second.created_at as Timestamp).toDate()) {
          return -1;
        } else if ((first.created_at as Timestamp).toDate() > (second.created_at as Timestamp).toDate()) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    const paymentsData = monthlyPayments.map((payment) => {
      const mwhUsage = monthlyUsages.find((usage) => usage.student_account_id == payment.student_account_id)?.amount_mwh;
      const kwhUsage = mwhUsage ? parseInt(mwhUsage) / 1000000 : 0;
      return {
        account_id: payment.student_account_id,
        account_name: students.find((student) => student.id == payment.student_account_id)?.name,
        room_id: students.find((student) => student.id == payment.student_account_id)?.room_id,
        usage_kWh: kwhUsage,
        total_payment: parseInt(payment.amount_ujpy) / 1000000,
        primary_payment: parseInt(payment.amount_primary_ujpy) / 1000000,
        adjust_payment: parseInt(payment.amount_adjust_ujpy) / 1000000,
        market_payment: parseInt(payment.amount_market_ujpy) / 1000000,
        reward_payment: parseInt(payment.amount_reward_ujpy) / 1000000,
        last_token: parseInt(payment.amount_utoken) / 1000000,
        year: payment.year,
        month: payment.month,
        timestamp: (payment.created_at as Timestamp).toDate().toLocaleString(),
      };
    });
    const csv = this.csvCommon.jsonToCsv(paymentsData, ',');
    const yearLabel = !year ? 'all_year' : year.toString();
    const monthLabel = !month ? 'all_month' : month.toString();
    this.csvCommon.downloadCsv(csv, 'monthly_payments_' + yearLabel + '_' + monthLabel);
  }
}
