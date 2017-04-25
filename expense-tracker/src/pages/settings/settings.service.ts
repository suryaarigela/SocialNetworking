import  uuidV4 from 'uuid/v4';
import {Expense} from './expense.model';
import {Category} from './category.model';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
console.log('UUIS ',uuidV4());
@Injectable()
export class SettingsService{
    static nextId:number =5;
  //    expenses : Expense[]=[];
  url='http://192.168.178.23:8081/spring-social-networking/rest/expenses'
   cats=[];
   cat :Category[];

   constructor(private _http: Http){
       
   }


   addCategories(category: Category){
       console.log('addCategories');
       let isAvail:boolean=false;
    //  this.getCategories().then(existingcats => console.log(existingcats));
      this.cat.forEach(element => {
          isAvail=true;
      });
      if(!isAvail){
        console.log('adding');  
       category.id=uuidV4();
       this.addCat(category);
      }
      // this.expenses.push(expense);
       //this.storageExpenses();
   }

  
  ionViewWillEnter(){
 this.getCategories().then(res => this.cat=res.json());
  
}
 
 addCat(category){
       var body=JSON.stringify(category);
        var headers = new Headers();
        if(category.id == undefined){
          category.id=uuidV4();
        }
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin','*');
      this._http
        .post(this.url+'/category/add',
          body, {
            headers: headers
          })
          .subscribe(data => {
                alert('ok');
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
 }

  updateCat(category){
       var body=JSON.stringify(category);
        var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin','*');
      this._http
        .post(this.url+'/category/update',
          body, {
            headers: headers
          })
          .subscribe(data => {
                alert('ok');
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
 }

   getCategories(){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin','*');
       return  this._http.get(this.url+"/category/all", {
            headers: headers
          }).toPromise();
   }

    getActiveCategories(){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin','*');
       return  this._http.get(this.url+"/category/all/active", {
            headers: headers
          }).toPromise();
   }

  


 
}