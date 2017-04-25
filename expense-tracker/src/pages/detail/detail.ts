import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExpenseService} from '../../app/expense.service';
import {Expense} from '../../app/expense.model';
import {SettingsService} from '../../pages/settings/settings.service';
import {Category} from '../../pages/settings/category.model';
/**
 * Generated class for the Detail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
   categories:Category[];
  expense:Expense;
  cat:Category[];

  constructor(private navCtrl: NavController,
  private navParams :NavParams,private expenseService: ExpenseService,
  private settingService: SettingsService,private alertCtrl:AlertController) {
   // settingService.getCategories().then(expenses => this.cat=expenses);
    //this.cat.forEach(categor=> this.categories.concat(categor.categories));
   // this.categories=
    this.expense={
       date:'',
       amount:0,
       category:'',
       description:''
    };
     
    console.log('Nav params '+ navParams);
    const expenseId=navParams.get('expenseId');
    if(expenseId){
        expenseService.getExpense(expenseId).then(res => this.expense=res.json());

    } 
  }

   ionViewWillEnter() {
this.settingService.getActiveCategories().then(res => this.categories=res.json());
   }
 
  
  

 onSave(){
   if(this.expense.id){
  // this.expenseService.updateExpense(this.expense);
   }else{
        this.expenseService.addExpense(this.expense);
   }
   this.navCtrl.pop();
 }

 onTrash(){ 
       this.showConfirm();
 }

 showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Delete',
      message: 'Are you sure you want to delete this expense:"${this.expense.description}"',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
           // this.expenseService.removeExpense(this.expense.id);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
