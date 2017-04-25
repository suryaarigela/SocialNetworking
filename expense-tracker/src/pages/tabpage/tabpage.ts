import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import {Settingspage} from '../../pages/settings/settings';
import {Chartpage} from  '../../pages/chart/chart';
/**
 * Generated class for the Tabpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabpage',
  templateUrl: 'tabpage.html',
})
export class Tabpage {
 rootPage1:any =HomePage;
  rootPage2:any =HomePage;
   rootPage3:any =Chartpage;
    rootPage4:any =Settingspage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabpage');
  }

}
