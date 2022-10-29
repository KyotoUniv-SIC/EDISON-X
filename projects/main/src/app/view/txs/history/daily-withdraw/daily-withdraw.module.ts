import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'projects/main/src/app/material.module';
import { PipesModule } from 'projects/main/src/app/pipes/pipes.module';
import { DailyWithdrawComponent } from './daily-withdraw';

@NgModule({
  declarations: [DailyWithdrawComponent],
  imports: [CommonModule, RouterModule, MaterialModule, MatChipsModule, PipesModule],
  exports: [DailyWithdrawComponent],
})
export class DailyWithdrawModule {}
