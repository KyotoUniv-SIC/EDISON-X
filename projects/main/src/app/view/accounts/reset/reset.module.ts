import { MaterialModule } from '../../../material.module';
import { ResetComponent } from './reset.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResetComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule],
  exports: [ResetComponent],
})
export class ResetModule {}
