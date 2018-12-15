import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { CalendarModule } from 'app/calendar/calendar.module';

@NgModule({
  imports: [
    CalendarModule
  ],
  declarations: [
    DashboardContainerComponent,
  ],
  exports: []
})
export class DashboardModule { }