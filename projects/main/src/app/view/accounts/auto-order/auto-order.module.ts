import { MaterialModule } from '../../../material.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { AutoOrderComponent } from './auto-order.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AutoOrderComponent],
  imports: [CommonModule, MaterialModule, FormsModule, RouterModule, PipesModule],
  exports: [AutoOrderComponent],
})
export class AutoOrderModule {}
