import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {SettingsService} from './settings.service';
import {Category} from './category.model';
/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settingspage {
  transport:boolean;
  food:boolean;
  grossery:boolean;
  movies:boolean;
  fuel:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private settingsService:SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

  updateSavings(){
    console.log('transport '+this.transport +' '+this.food +' '+this.grossery);
   let  cats:string[];
    if(this.transport){
       cats.concat('transport');
    }if(this.food){
       cats.concat('food');
    }if(this.grossery){
       cats.concat('grossery');
    }if(this.movies){
       cats.concat('movies');
    }
    if(this.fuel){
       cats.concat('fuel');
    }

    let category:Category;
    category.categories=cats;
    this.settingsService.addCategories(category);
     this.navCtrl.setRoot(HomePage);
  }

}
