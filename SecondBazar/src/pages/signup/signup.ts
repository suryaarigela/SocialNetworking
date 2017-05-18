import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignUpService} from './signup.service';
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {



  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }


  loginForm:FormGroup;
  constructor(form: FormBuilder,public navCtrl: NavController, public navParams: NavParams, private _signupService :SignUpService) {
    // Create a new form group
    this.loginForm = form.group({ // name should match [ngFormModel] in your html
      userName: ["", Validators.required], // Setting fields as required
      password: ["", Validators.required],
      email:["", Validators.required]
      
  });
  }

  // This is called on form submit
  login(event) {
    console.log() // {username: <usename>, password: <password> }
    this._signupService.registerUser(this.loginForm.value);
    this.navCtrl.pop();
  }

}
