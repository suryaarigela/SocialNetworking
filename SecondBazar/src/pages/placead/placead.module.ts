import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Placead } from './placead';

@NgModule({
  declarations: [
    Placead,
  ],
  imports: [
    IonicPageModule.forChild(Placead),
  ],
  exports: [
    Placead
  ]
})
export class PlaceadModule {}
