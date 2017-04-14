"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var HomeComponent = (function () {
    function HomeComponent(fb) {
        this.form = fb.group({
            firstName: ['', forms_1.Validators.required],
            lastname: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            mobileNr: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
        this.form2 = fb.group({
            userUsername: ['', forms_1.Validators.required],
            userpassword: ['', forms_1.Validators.required],
        });
    }
    HomeComponent.prototype.login = function () {
        console.log(this.form2.value);
    };
    //form = new ControlGroup({
    //    username:new Control('',Validators.required),
    //    password: new Control('',Validators.required)
    // })
    HomeComponent.prototype.signUp = function () {
        console.log(this.form.value);
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home.component.html',
            styleUrls: ['app/home.styles.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map