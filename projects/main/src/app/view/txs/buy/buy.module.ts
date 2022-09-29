import { MaterialModule } from '../../../material.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { BuyComponent } from './buy.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [BuyComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule, PipesModule, ChartsModule],
  exports: [BuyComponent],
})
export class BuyModule {}
