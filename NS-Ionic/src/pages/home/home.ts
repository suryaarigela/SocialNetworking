
import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StationSearchService} from './station.search.service';
import {AutoCompleteComponent} from "ionic2-auto-complete";
import { ViewChild} from '@angular/core';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    fromStation;
 @ViewChild('fromStat') 
 fromStat: AutoCompleteComponent;

  @ViewChild('toStat') 
 toStat: AutoCompleteComponent;
  loginForm:FormGroup;
  constructor(form: FormBuilder,public navCtrl: NavController,public stationSearchService:StationSearchService) {
    // Create a new form group
    this.loginForm = form.group({ // name should match [ngFormModel] in your html
      fromStation: ["", Validators.required], // Setting fields as required
      toStation: ["", Validators.required],
      date:["", Validators.required],
      time:["", Validators.required]
     //  station:["", Validators.required]
      
      
  });
  }
login(){
  console.log('*******'+this.fromStat.getValue());
    console.log('*******'+this.toStat.getValue());
}

}
