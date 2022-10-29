import { DailyWithdrawRoutingModule } from './daily-withdraw-routing.module';
import { DailyWithdrawComponent } from './daily-withdraw.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DailyWithdrawComponent],
  imports: [CommonModule, DailyWithdrawRoutingModule],
})
export class AppDailyWithdrawModule {}
