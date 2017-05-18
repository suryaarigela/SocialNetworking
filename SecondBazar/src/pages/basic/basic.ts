import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { App, MenuController } from 'ionic-angular';
import {Placead} from '../../pages/placead/placead'
import {Posts} from '../../pages/posts/posts'
import {Login} from '../../pages/login/login';
import {Signup} from '../../pages/signup/signup';
import {HomePage} from '../../pages/home/home';
/**
 * Generated class for the Basic page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class Basic {

   private posts;
 private placead;
 private login;
 private signup;
 loginUser:string;
 globalUserName:string;
isUserLoggedIn:boolean=false;
 categories:Category[];
  constructor(public navCtrl: NavController,app: App, menu: MenuController) {
  this.initializeItems();
  this.intializeCategory();
  menu.enable(true);
  
  this.rootPage = Posts;
  this.posts = Posts;
    this.homePage = Placead;
   this.placead=Placead;
   this.login=Login;
   this.signup=Signup;
  }

  ionViewDidLoad() {
 this.loginUser  =localStorage.getItem('globalUserId');
 this.globalUserName=localStorage.getItem('globalUserName');
 console.log("user logged in "+this.loginUser);
 if(this.loginUser != undefined){
this.isUserLoggedIn=true;
 }
  }

  searchQuery: string = '';
  items: string[];
intializeCategory(){
  this.categories=[
    {
      image:"cycle.png",
      title:"Cycles",
      description:"All varieties of cycles"
    },{
       image:"books.png",
      title:"Books",
      description:"All varieties of Books"
    },
    {
       image:"mobiles.png",
      title:"Mobiles",
      description:"All varieties of Mobiles"
    }
  ]
}

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

   private rootPage;
  private homePage;
  openPage(p) {
    this.rootPage = p;
  }

  logout(){
    localStorage.clear();
    //this.rootPage = HomePage
   // this.openPage("Login");
   this.isUserLoggedIn=false;
   this.navCtrl.setRoot(HomePage);
  }

}
