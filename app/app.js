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
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var home_1 = require('./pages/home/home');
var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = home_1.HomePage;
        platform.ready().then(function () {
            ionic_native_1.StatusBar.styleDefault();
        });
    }
    MyApp = __decorate([
        ionic_angular_1.App({
            template: "\n    <ion-menu [content]=\"content\">\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n      <ion-content>\n        <ion-list>\n          <button ion-item>\n            Login\n          </button>\n          <button ion-item>\n            Signup\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-nav id=\"nav\" #content [root]=\"rootPage\"></ion-nav>",
            config: {}
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
