import  uuidV4 from 'uuid/v4';
import {Expense} from './expense.model';
import Dexie from 'dexie';
import {Category} from './category.model';
console.log('UUIS ',uuidV4());

export class SettingsService extends Dexie{
    static nextId:number =5;
  //    expenses : Expense[]=[];
   categories: Dexie.Table<Category, string>;
   cats=[];

   constructor(){
       super('expense_categories');
       this.version(1).stores({
           categories:'catid'
       });
   }

  

   updateCategories(category: Category){
      // const index=this.expenses.findIndex(it=> it.id === expense.id);
       //this.expenses[index]=expense;
       //this.storageExpenses();
        this.categories.update(category.catid,category);
   }

   addCategories(category: Category){
      this.getCategories();
       category.catid=uuidV4();
       this.categories.add(category);
      // this.expenses.push(expense);
       //this.storageExpenses();
   }

  

   getCategories():Dexie.Promise<Category[]>{
       return this.categories.toArray();
   }

 private loadStorageCategories():Category[]{
     const categoriesFromStorage= localStorage.getItem('categories');
     if(categoriesFromStorage){
         return JSON.parse(categoriesFromStorage);    
     }else{
         return [];
     }

 }
 //  private storageExpenses(){
   //    localStorage.setItem('expenses',JSON.stringify(this.expenses));
  // }
}