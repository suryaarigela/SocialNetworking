import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
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
   rootPage3:any =HomePage;
    rootPage4:any =HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabpage');
  }

}
