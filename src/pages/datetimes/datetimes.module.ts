import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatetimesPage } from './datetimes';

@NgModule({
  declarations: [
    DatetimesPage,
  ],
  imports: [
    IonicPageModule.forChild(DatetimesPage),
  ],
})
export class DatetimesPageModule {}
