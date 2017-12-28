webpackJsonp([4],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomPageModule", function() { return EditRoomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_room__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditRoomPageModule = (function () {
    function EditRoomPageModule() {
    }
    EditRoomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_room__["a" /* EditRoomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_room__["a" /* EditRoomPage */]),
            ],
        })
    ], EditRoomPageModule);
    return EditRoomPageModule;
}());

//# sourceMappingURL=edit-room.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rooms_rooms_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRoomPage = (function () {
    function EditRoomPage(navCtrl, navParams, rooms, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rooms = rooms;
        this.toast = toast;
    }
    EditRoomPage.prototype.ionViewWillLoad = function () {
        this.room = this.navParams.get('room');
    };
    EditRoomPage.prototype.saveRoom = function (room) {
        var _this = this;
        this.rooms.editRoom(room).then(function () {
            _this.toast.show(room.titulo + " saved!");
            _this.navCtrl.setRoot('RoomsPage');
        });
    };
    EditRoomPage.prototype.removeRoom = function (room) {
        var _this = this;
        this.rooms.removeRoom(room).then(function () {
            _this.toast.show(room.titulo + " deleted!");
            _this.navCtrl.setRoot('RoomsPage');
        });
    };
    EditRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-room',template:/*ion-inline-start:"/home/paco/Documentos/bryan/src/pages/edit-room/edit-room.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{room?.titulo}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label> Nombre: </ion-label>\n    <ion-input [(ngModel)]="room.titulo" type="text" placeholder="Sala 1"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Admin: </ion-label>\n    <ion-input [(ngModel)]="room.admin" type="text" placeholder="chauder"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Contenido: </ion-label>\n    <ion-input [(ngModel)]="room.descripcion" type="text" placeholder="aguante san luis"></ion-input>\n  </ion-item>\n\n  <button ion-button block clear (click)="saveRoom(room)"> Save </button>\n  <button ion-button block clear color="danger" (click)="removeRoom(room)"> Delete </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/paco/Documentos/bryan/src/pages/edit-room/edit-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_rooms_rooms_service__["a" /* RoomsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], EditRoomPage);
    return EditRoomPage;
}());

//# sourceMappingURL=edit-room.js.map

/***/ })

});
//# sourceMappingURL=4.js.map