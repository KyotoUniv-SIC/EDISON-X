import { PaymentComponent } from './payment.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'projects/main/src/app/material.module';
import { PipesModule } from 'projects/main/src/app/pipes/pipes.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, RouterModule, MaterialModule, PipesModule, MatChipsModule],
  exports: [PaymentComponent],
})
export class PaymentModule {}
