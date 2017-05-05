
import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  loginForm:FormGroup;
  constructor(form: FormBuilder,public navCtrl: NavController) {
    // Create a new form group
    this.loginForm = form.group({ // name should match [ngFormModel] in your html
      fromStation: ["", Validators.required], // Setting fields as required
      toStation: ["", Validators.required],
      date:["", Validators.required],
      time:["", Validators.required]
      
      
  });
  }


}
