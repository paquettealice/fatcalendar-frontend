import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { CalendarTableComponent } from './views/calendar-table/calendar-table.component';
import { CalendarContainerComponent } from './containers/calendar-container/calendar-container.component';
import { InfinityTableModule } from 'app/_shared/components/infinity-table/infinity-table.module';

@NgModule({
  declarations: [
    CalendarTableComponent, 
    CalendarContainerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    InfinityTableModule
  ],
  exports: [
    CalendarContainerComponent
  ]
})
export class CalendarModule { }
