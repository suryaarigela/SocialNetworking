import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService{
 // url='http://192.168.178.23:8081/spring-social-networking/rest/expenses'
  url='http://sample-env.6m84pjwzj6.us-west-2.elasticbeanstalk.com/rest/bazar';
 //url='http://192.168.178.23:8081/choudhury-rest/rest/bazar';
constructor(private _http: Http){
       
   }

verifyUser(email,pwd){
 var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin','*');
       return  this._http.get(this.url+"/auth/"+email+"/"+pwd, {
            headers: headers
          }).toPromise();
  }

}