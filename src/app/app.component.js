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
var kinvey_angular2_sdk_1 = require('kinvey-angular2-sdk');
var AppComponent = (function () {
    function AppComponent(kinvey) {
        this.name = 'Angular';
        kinvey.initialize({
            appKey: 'kid_WJt3WXdOpx',
            appSecret: '7cfd74e7af364c8f90b116c835f92e7d'
        })
            .then(function (activeUser) {
            if (!activeUser) {
                return kinvey_angular2_sdk_1.Kinvey.User.login('admin', 'admin');
            }
            return activeUser;
        })
            .then(function (activeUser) {
            var store = kinvey_angular2_sdk_1.Kinvey.DataStore.collection('books', kinvey_angular2_sdk_1.Kinvey.DataStoreType.Sync);
            return store.find().toPromise();
        })
            .then(function (books) {
            console.log(books);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1>"
        }), 
        __metadata('design:paramtypes', [kinvey_angular2_sdk_1.Kinvey])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map