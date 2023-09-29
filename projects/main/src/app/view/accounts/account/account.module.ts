import { MaterialModule } from '../../../material.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, PipesModule, ChartsModule],
  exports: [AccountComponent],
})
export class AccountModule {}
