import { NgModule } from '@angular/core';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebsiteFooterComponent } from './website-footer/website-footer.component';

@NgModule({
  imports: [
    FlexLayoutModule
  ],
  declarations: [
    WebsiteHeaderComponent,
    WebsiteFooterComponent
  ],
  exports: [
    WebsiteHeaderComponent,
    WebsiteFooterComponent
  ]
})
export class StaticModule {
  constructor() { }
}