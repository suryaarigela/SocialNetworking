import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Category} from '../../pages/settings/category.model';
import {SettingsService} from '../../pages/settings/settings.service';
import  uuidV4 from 'uuid/v4';
/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class Categorypage {
 category:Category;
 //description:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private settingsService:SettingsService) {
     this.category={
      name:'',checked:'false'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');
  }

  addCategory(){
  
    this.settingsService.addCat(this.category);
      this.navCtrl.pop();
  }

}
