import  uuidV4 from 'uuid/v4';
import {Expense} from './expense.model';
import Dexie from 'dexie';
console.log('UUIS ',uuidV4());

export class ExpenseService extends Dexie{
    static nextId:number =5;
  //    expenses : Expense[]=[];
   expenses: Dexie.Table<Expense, string>;
   categories=['Food','Transport','Others'];

   constructor(){
       super('expense_tracker');
       this.version(1).stores({
           expenses:'id,date'
       });
   }

   getExpense(expenseId : string):Dexie.Promise<Expense>{
     //  const exp= this.expenses.find(it=> it.id===expenseId)
      // return Object.assign({},exp);
      return this.expenses.get(expenseId);
   }

   updateExpense(expense: Expense){
      // const index=this.expenses.findIndex(it=> it.id === expense.id);
       //this.expenses[index]=expense;
       //this.storageExpenses();
        this.expenses.update(expense.id,expense);
   }

   addExpense(expense: Expense){
       expense.id=uuidV4();
       this.expenses.add(expense);
      // this.expenses.push(expense);
       //this.storageExpenses();
   }

   removeExpense(expenseId: string){
      //  const index=this.expenses.findIndex(it=> it.id === expenseId);
       // this.expenses.splice(index,1);
       // this.storageExpenses();
         this.expenses.delete(expenseId);
   }

   getExpenses():Dexie.Promise<Expense[]>{
       return this.expenses.toArray();
   }

 private loadStorageExpenses():Expense[]{
     const expensesFromStorage= localStorage.getItem('expenses');
     if(expensesFromStorage){
         return JSON.parse(expensesFromStorage);    
     }else{
         return [];
     }

 }
 //  private storageExpenses(){
   //    localStorage.setItem('expenses',JSON.stringify(this.expenses));
  // }
}