import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup } from '../../pages/signup/signup';
import { LoginService } from './login.service';
import { AlertController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {Basic} from '../../pages/basic/basic';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _loginService: LoginService, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  verifyUser(json) {
 console.log('json.validUser  '+json.validUser);
    if (json.validUser == "true") {
      localStorage.setItem("globalUserId", json.id);
      localStorage.setItem("globalUserName", json.uName);
      this.navCtrl.setRoot(Basic);
    } else {
      this.showAlert();
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Invalid credentials!',
      subTitle: 'Incorrect credentials , Please enter Valid details',
      buttons: ['OK']
    });
    alert.present();
  }

  login() {
    console.log(this.email + ' : ' + this.password);
    this._loginService.verifyUser(this.email, this.password).then(res =>
      this.verifyUser(res.json())
    );
  }
  signUp() {
    this.navCtrl.push(Signup);
  }

}
