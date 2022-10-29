import { BuyComponent } from './buy/buy.component';
import { HistoryComponent } from './history/history.component';
import { SellComponent } from './sell/sell.component';
import { TxsComponent } from './txs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TxsComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'history', component: HistoryComponent },
  {
    path: 'order/solar',
    loadChildren: () => import('./order/solar/solar.module').then((m) => m.AppSolarModule),
  },
  {
    path: 'order/utility',
    loadChildren: () => import('./order/utility/utility.module').then((m) => m.AppUtilityModule),
  },
  {
    path: 'history/solar',
    loadChildren: () => import('./history/solar/solar.module').then((m) => m.AppSolarModule),
  },
  {
    path: 'history/utility',
    loadChildren: () => import('./history/utility/utility.module').then((m) => m.AppUtilityModule),
  },
  {
    path: 'history/daily-withdraw',
    loadChildren: () => import('./history/daily-withdraw/daily-withdraw.module').then((m) => m.AppDailyWithdrawModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxsRoutingModule {}
