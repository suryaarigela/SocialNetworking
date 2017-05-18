import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Basic } from './basic';

@NgModule({
  declarations: [
    Basic,
  ],
  imports: [
    IonicPageModule.forChild(Basic),
  ],
  exports: [
    Basic
  ]
})
export class BasicModule {}
