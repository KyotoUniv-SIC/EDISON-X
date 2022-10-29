import { DailyWithdrawComponent } from './daily-withdraw.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'daily-withdraw/:history_id', component: DailyWithdrawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyWithdrawRoutingModule {}
