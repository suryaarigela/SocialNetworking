import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chartpage } from './chart';
import {ChartModule} from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
@NgModule({
  declarations: [
    Chartpage,
  ],
  imports: [
    IonicPageModule.forChild(Chartpage),ChartModule.forRoot(highcharts)
  ],
  exports: [
    Chartpage
  ]
})
export class ChartModule2 {}
