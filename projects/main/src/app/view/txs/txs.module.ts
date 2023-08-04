import { MaterialModule } from '../../material.module';
import { PipesModule } from '../../pipes/pipes.module';
import { TxsComponent } from './txs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TxsComponent],
  imports: [CommonModule, RouterModule, MaterialModule, PipesModule],
  exports: [TxsComponent],
})
export class TxsModule {}
