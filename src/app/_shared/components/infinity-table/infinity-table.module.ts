import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityTableComponent } from './infinity-table.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    InfinityTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    InfinityTableComponent
  ]
})
export class InfinityTableModule { }
