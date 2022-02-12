import { MaterialModule } from '../../../material.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, ChartsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}