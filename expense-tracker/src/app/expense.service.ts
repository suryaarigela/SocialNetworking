import  uuidV4 from 'uuid/v4';
import {Expense} from './expense.model';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
console.log('UUIS ',uuidV4());

@Injectable()
export class ExpenseService {
    static nextId:number =5;
     url='http://192.168.178.23:8081/spring-social-networking/rest/expenses'
  //    expenses : Expense[]=[];
  // expenses: Dexie.Table<Expense, string>;
   categories=['Food','Transport','Others'];

   constructor(private _http: Http){
          console.log('intialized');
   }
    


   getExpense(expenseId : string){
     //  const exp= this.expenses.find(it=> it.id===expenseId)
      // return Object.assign({},exp);
    //  return this._http.get("http://localhost:8081/spring-social-networking/rest/expenses/"+expenseId); 


        var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin','*');
       return  this._http.get(this.url+"/expense/"+expenseId, {
            headers: headers
          }).toPromise();
   }

  // updateExpense(expense: Expense){

    //    this.expenses.update(expense.id,expense);
   //}

   addExpense(expense: Expense){
       expense.id=uuidV4();
        var body=JSON.stringify(expense);
        var headers = new Headers();
       headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin','*');
      this._http
        .post(this.url+'/add',
          body, {
            headers: headers
          })
          .subscribe(data => {
                alert('ok');
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
      // this.expenses.push(expense);
       //this.storageExpenses();
   }

  //
 //  removeExpense(expenseId: string){
     
  //       this.expenses.delete(expenseId);
   //
//}

   getExpenses(){
        var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin','*');
       return  this._http.get(this.url+"/all", {
            headers: headers
          }).toPromise();
   }

   getSpecificExpenses(month){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin','*');
       return  this._http.get(this.url+"/month/"+month, {
            headers: headers
          }).toPromise();
   }


 //  private storageExpenses(){
   //    localStorage.setItem('expenses',JSON.stringify(this.expenses));
  // }
}