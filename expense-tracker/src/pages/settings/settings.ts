import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {SettingsService} from './settings.service';
import {Category} from './category.model';
import {Categorypage} from '../../pages/category/category';
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
  category:Category;  
    cat :Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private settingsService:SettingsService
  ) {
     
  }

  ionViewWillEnter() {
    this.settingsService.getCategories().then(res => this.cat=res.json());
   }

  notify(cate:Category){
    console.log("toggled: "+cate.name);
    this.category=cate;
  }

event(event){
  console.log(event.checked)
   this.category.checked=event.checked;
   this.updateSavings();
}
  updateSavings(){
    console.log('transport '+this.category.name );
   let  cats:string[]=[];
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

    
 //   this.category.categories=cats;
    this.settingsService.updateCat(this.category);
   //  this.navCtrl.setRoot(HomePage);
  }

  onAddClick(){
    console.log('Launch add  category page')
    this.navCtrl.push(Categorypage);
  }

}
