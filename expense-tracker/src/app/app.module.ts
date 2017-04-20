import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Tabpage} from '../pages/tabpage/tabpage';
import { DetailModule } from '../pages/detail/detail.module';
import {TabpageModule} from '../pages/tabpage/tabpage.module';
import {HomepageModule} from '../pages/home/home.module';

import {ExpenseService} from '../app/expense.service';

@NgModule({
   imports: [
    BrowserModule,
    DetailModule,
    TabpageModule,
    HomepageModule,
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    MyApp,
    HomePage,
    Tabpage
  ],
 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tabpage
  ],
  providers: [
    ExpenseService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
