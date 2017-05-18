import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import {Placead} from '../../pages/placead/placead'
import {Posts} from '../../pages/posts/posts'
import {Login} from '../../pages/login/login';
import {Signup} from '../../pages/signup/signup';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 loginUser:string;
isUserLoggedIn:boolean=false;

  constructor(public navCtrl: NavController) {
 

  }

  ionViewDidLoad() {


  }
login(){
  this.navCtrl.push(Login);
}


  logout(){
    localStorage.clear();
    //this.rootPage = HomePage
   // this.openPage("Login");
   this.isUserLoggedIn=false;
  }


}
