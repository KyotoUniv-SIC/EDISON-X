import { MaterialModule } from '../../../material.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { XrplComponent } from './xrpl.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [XrplComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, PipesModule],
  exports: [XrplComponent],
})
export class XrplModule {}
