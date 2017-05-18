import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostsModel} from './posts.model';
/**
 * Generated class for the Posts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class Posts {

  posts:PostsModel[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.posts=[
      {
        image:"1.jpg",
        title:"cycle for sale",
        description:"Used cycle from past 1year with good condition Interested people can reach me",
        price:"225$"
      },
      {
        image:"2.jpg",
        title:"Samasung Galaxy",
        description:"Used mobile from past 7 months with Whole kit",
        price:"125$"
      }, {
        image:"3.jpg",
        title:"cycle for sale",
        description:"Used cycle from past 1year with good condition Interested people can reach me",
        price:"225$"
      },
      {
        image:"4.jpg",
        title:"Samasung Galaxy",
        description:"Used mobile from past 7 months with Whole kit",
        price:"125$"
      },
      {
        image:"5.jpg",
        title:"Samasung Galaxy",
        description:"Used mobile from past 7 months with Whole kit",
        price:"125$"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Posts');
  }

}
