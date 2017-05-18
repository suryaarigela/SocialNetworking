import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignUpService{
 // url='http://192.168.178.23:8081/spring-social-networking/rest/expenses'
  url='http://sample-env.6m84pjwzj6.us-west-2.elasticbeanstalk.com/rest/bazar';
//  url='http://192.168.178.23:8081/choudhury-rest/rest/bazar';
constructor(private _http: Http){
       
   }

registerUser(user){
 var headers = new Headers();
       
          user.uid=user.userName+'_'+user.email;
        
         var body=JSON.stringify(user);
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin','*');
      this._http
        .post(this.url+'/addUser',
          body, {
            headers: headers
          })
          .subscribe(data => {
                alert('ok');
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
}

}