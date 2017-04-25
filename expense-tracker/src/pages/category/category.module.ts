import { NgModule } from '@angular/core';
import { Categorypage } from './category';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
   imports: [
    IonicPageModule.forChild(Categorypage),
  ],
  declarations: [
    Categorypage,
  ],
 
  exports: [
    Categorypage
  ]
})
export class CategoryModule {}
