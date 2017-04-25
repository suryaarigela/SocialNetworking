import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {ExpenseService} from '../../app/expense.service';
import {Expense} from '../../app/expense.model';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  expenses;
   sum:number;
   month:string;
  constructor(public navCtrl: NavController,private expenseService: ExpenseService) {
  //this.getTotalExpense();
  }

  getTotalExpense(){
     let final:string;
  let amount:string;let a:number;let b:number;
    this.expenses.forEach(element => {
   console.log("***********"+element)
  a=element.amount;
  if(b!= undefined){
     b=parseFloat(b+"")+parseFloat(a+"");
  }else{
    b=parseFloat(a+"");
  }
 
 console.log(parseFloat(b+""));
  });
 
  this.sum=parseFloat(b+"");
  }

ionViewWillEnter(){
 
 this.expenseService.getExpenses().then(res =>this.expenses=res.json() );
  this.getTotalExpense();
}
  onItemClick(expense : Expense){
    console.log("Amount of "+expense.amount+" for the expense "+expense.description);
    this.navCtrl.push(DetailPage,{
      expenseId:expense.id
    });
  }

onAddClick(){
  console.log('add new Expense')
  this.navCtrl.push(DetailPage);
}

selectMonth(){
  console.log('Selected month'+this.month);
  this.expenseService.getSpecificExpenses(this.month).then(res =>this.expenses=res.json() );
   this.getTotalExpense();
}
}
