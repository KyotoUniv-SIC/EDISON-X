import { BuyModule } from '../../view/txs/buy/buy.module';
import { SellModule } from '../../view/txs/sell/sell.module';
import { TxsModule } from '../../view/txs/txs.module';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { TxsRoutingModule } from './txs-routing.module';
import { TxsComponent } from './txs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { HistoryModule } from '../../view/txs/history/history.module';

@NgModule({
  declarations: [TxsComponent, BuyComponent, SellComponent,HistoryComponent],
  imports: [CommonModule, TxsRoutingModule, TxsModule, BuyModule, SellModule,HistoryModule],
})
export class AppTxsModule {}
