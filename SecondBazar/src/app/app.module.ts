import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {PlaceadModule} from '../pages/placead/placead.module'
import {PostsModule} from '../pages/posts/posts.module'
import {SignupModule} from '../pages/signup/signup.module'
import {LoginModule} from '../pages/login/login.module'
import {SignUpService} from '../pages/signup/signup.service';
import {LoginService} from '../pages/login/login.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import {BasicModule} from '../pages/basic/basic.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    PlaceadModule,
    PostsModule,
    HttpModule,
    SignupModule,
    LoginModule,
    BasicModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     SignUpService,
     LoginService,
     ImagePicker,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
