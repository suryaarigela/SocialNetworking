import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Tabpage} from '../pages/tabpage/tabpage';
import {Settingspage} from '../pages/settings/settings';
//import {Categorypage} from '../pages/category/category';
import { DetailModule } from '../pages/detail/detail.module';
import {TabpageModule} from '../pages/tabpage/tabpage.module';
import {HomepageModule} from '../pages/home/home.module';
import {SettingsModule} from '../pages/settings/settings.module'
import {ExpenseService} from '../app/expense.service';
import {SettingsService} from  '../pages/settings/settings.service';
import {CategoryModule} from '../pages/category/category.module';
import {ChartModule2} from '../pages/chart/chart.module';

import { HttpModule } from '@angular/http';

//import {HTTP_PROVIDERS} from '@angular/http';
@NgModule({
   imports: [
    BrowserModule,
    HttpModule,
    DetailModule,
    TabpageModule,
    HomepageModule,
    SettingsModule,
    CategoryModule,ChartModule2,
    IonicModule.forRoot(MyApp),
  ],
  declarations: [
    MyApp,
    HomePage,
    Tabpage,
    Settingspage
  ],
 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tabpage
  ],
  providers: [
    ExpenseService,
    SettingsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
