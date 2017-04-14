import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl:'app/home.component.html',
  styleUrls:['app/home.styles.css']
})
export class HomeComponent {
  
  firstName :String;
  lastname:String;
   form:FormGroup;
   form2:FormGroup;
    constructor(fb: FormBuilder){
        this.form=fb.group(
            {
                firstName:['',Validators.required],
                lastname:['',Validators.required],
                email:['',Validators.required],
                mobileNr:['',Validators.required],
                password:['',Validators.required],

            }
        );

          this.form2=fb.group(
            {
                userUsername:['',Validators.required],
                userpassword:['',Validators.required],

            }
        );
    }

   
    login(){
     console.log( this.form2.value);
    }
    //form = new ControlGroup({
    //    username:new Control('',Validators.required),
    //    password: new Control('',Validators.required)
   // })

    signUp(){
        console.log(this.form.value);
    }
}