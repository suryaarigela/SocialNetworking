import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
   imports: [
    IonicPageModule.forChild(DetailPage),
  ],
  declarations: [
    DetailPage,
  ],
 
  exports: [
    DetailPage
  ]
})
export class DetailModule {}
